async function run() {
  const input = await Bun.file(new URL(`${import.meta.url}/../input.txt`)).text();
  const lines = input.split("\n\n");
  const seeds = lines.shift()?.split(": ")[1].split(" ").map(Number)

type MapElement = {
  src: number,
  dst: number,
  range: number,
}

function range(line: string) {
  const [src, dst, range] = line.split(" ")

  return {
    src: +src,
    dst: +dst,
    range: +range
  } as MapElement
}

function parse(line: string) {
  const filtered = line.split("\n").filter(n => n)
  const [src, _, dst] = filtered.shift()?.split(" ")[0].split("-") || []
  
  return {
    src,
    dst,
    elements: filtered.map(range)
  }
}

const data = lines.map(line => parse(line))
const map = data.reduce((acc, item) => {
  acc[item.src] = item
  return acc
}, {})

// console.log(map);

function findNode(seedNumber: number, name: string, map: { [key: string]: { src: number, dst: number, elements: MapElement[]  } }) {
  if (map[name] === undefined) {
    return seedNumber
  }

  const item = map[name]

  const range = item.elements.find(n => n.src <= seedNumber && seedNumber <= (n.src + n.range))
  
  if (range) {
    const next = range.dst + (seedNumber - range.src)
    return findNode(next, item.dst, map)
  }

  return findNode(seedNumber, item.dst, map)
}

let sum = 0
seeds?.forEach(seed => {
  const location = findNode(seed, "seed", map)
  console.log(seed, location);
  
})

return

  const oga = new Map<string, number[]>();
  const weo = {};
  const arr = []

  let categoryIndex = 0;
  Object.keys(map).forEach((key) => {
    const [srcType, dstType] = key.split("map:")[0].split("-to-");

    const nomeros = {
    };

    weo[srcType] = []

    map[key].forEach(([dst, src, length]) => {
      for (let i = 0; i <= src+length; i++) {
        nomeros[i] = i;
      }

      nomeros[src] = dst;

      for (let i = 0; i < length; i++) {
        nomeros[src + i] = dst + i;
      }
    });

    Object.keys(nomeros).forEach((key) => {
      weo[srcType].push([+key, nomeros[key]])
      // weo[categoryIndex].push([+key, nomeros[key]])
    });

    /* seeds.forEach((seed) => {
      if (nomeros[seed] === undefined) {
        return
      }
      console.log(seed, nomeros[seed])
    }) */

    /* const [type] = key.split(" map:")
    console.log(type.substring(0, type.lastIndexOf("to-")));
     */
    categoryIndex++;
  });

  console.log(weo)

  // 35
  // console.log(seeds);
  // console.log(map);
}

run();
