const letters = new Map([
  ["one", 1],
  ["two", 2],
  ["three", 3],
  ["four", 4],
  ["five", 5],
  ["six", 6],
  ["seven", 7],
  ["eight", 8],
  ["nine", 9]
])

const numberLetter = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
];

async function run() {
  const input = await Bun.file(new URL(`${import.meta.url}/../input.txt`)).text();
  const lines = input.split("\n");
  const calibrationNumbers: string[] = []

  for (let line of lines) {
    const first = getFirst(line)
    let last = getLast(line)

    if (last.length === 0) {
      last = first
    }

    calibrationNumbers.push(first + last);
  }

  const result = calibrationNumbers.map(Number).reduce((a, b) => a+b, 0);
  console.log(result)
}

const getFirst = (line: string) => {
  let first = "";
  let last = "";

  let firstFound = false;

  for (let i = 0; i < line.length; i++) {
    if (!isNaN(+line[i])) {
      if (!firstFound) {
        first = line[i]
        firstFound = true;
        break;
      }

      last = line[i]
    }
  }

  const inLine = [];
  for (let i = 0; i < numberLetter.length; i++) {
    const index = line.indexOf(numberLetter[i])
    if (index > -1) {
      inLine.push({
        index,
        letter: numberLetter[i],
        number: letters.get(numberLetter[i])
      });
    }
  }

  inLine.sort((a, b) => a.index - b.index)

  const [firstLetter, ...rest] = inLine
  const lastLetter = rest[rest.length - 1]

  if (firstLetter) {
    if (line.indexOf(firstLetter.letter) < line.indexOf(first)) {
      first = firstLetter.number?.toString() || ""
    }
  }

  if (lastLetter) {
    if (line.indexOf(lastLetter.letter) > line.indexOf(last)) {
      last = lastLetter.number?.toString() || ""
    }
  }

  if (last.length === 0) {
    last = first
  }

  return first
}


const getLast = (line: string) => {
  let last = "";

  for (let i = 0; i < line.length; i++) {
    if (!isNaN(+line[i])) {
      last = line[i]
    }
  }

  const inLine = [];
  for (let i = 0; i < numberLetter.length; i++) {
    const index = line.lastIndexOf(numberLetter[i])
    if (index > -1) {
      inLine.push({
        index,
        letter: numberLetter[i],
        number: letters.get(numberLetter[i])
      });
    }
  }

  inLine.sort((a, b) => a.index - b.index)
  const lastLetter = inLine[inLine.length - 1]

  if (lastLetter) {
    if (last.length > 0) {
      if (line.lastIndexOf(lastLetter.letter) > line.lastIndexOf(last)) {
        last = lastLetter.number?.toString() || ""
      }
    } else {
      last = lastLetter.number?.toString() || ""
    }
  }

  return last
}

run();
