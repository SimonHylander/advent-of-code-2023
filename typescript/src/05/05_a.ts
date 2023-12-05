async function run() {
  const input = await Bun.file(new URL(`${import.meta.url}/../input.txt`)).text();
  const lines = input.split("\n");
  const seeds = lines.shift()?.split("seeds: ")[1].split(" ").map(Number)
  let lowest = 0;
  console.log(seeds);

  const map = {
  };

  let isNewCategory = false;
  let mapIndex = -1;

  lines.forEach((line, i) => {
    /* if (line.startsWith("seeds:")) {
      seeds = line.split("seeds: ")[1].split(" ").map(Number);
      return;
    } */

    if (line === "") {
      isNewCategory = true;
      mapIndex = -1;
      return;
    }

    if (isNewCategory) {
    }

    if (line.includes(" map:")) {
      console.log(line.split(" map:"))
      const [src, dst] = line.split(" map:")[0].split("-to-")
      map[src] = {
        src,
        dst,
      };
      mapIndex = i;
    } else {
      const [dst, src, length] = line.split(" ").map(Number);
      // map[lines[mapIndex]].push([dst, src, length]);
    }
  });

console.log(map)
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
