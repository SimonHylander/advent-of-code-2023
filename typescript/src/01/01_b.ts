import assert from "assert";

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

  const sum = lines.map(line => {
    const first = getFirst(line)
    let last = getLast(line)

    if (last.length === 0) {
      last = first
    }

    return +(first + last)
  }).reduce((a, b) => a+b, 0);

  assert(sum === 54418)
}

const getFirst = (line: string) => {
  let first = "";
  let firstFound = false;

  for (let i = 0; i < line.length; i++) {
    if (!isNaN(+line[i])) {
      if (!firstFound) {
        first = line[i]
        firstFound = true;
        break;
      }
    }
  }

  // disgusting
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

  const [firstLetter] = inLine

  if (firstLetter) {
    if (line.indexOf(firstLetter.letter) < line.indexOf(first)) {
      first = firstLetter.number?.toString() || ""
    }
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
