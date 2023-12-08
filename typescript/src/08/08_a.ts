import { ListFormat } from "typescript";

async function run() {
  const input = await Bun.file(
    new URL(`${import.meta.url}/../input.txt`)
  ).text();

  const lines = [...input.split("\n")];
  let directions = input.split("\n").shift()?.split("") as string[];
  console.log(lines);

  const network = lines.slice(1, lines.length).map((line, i) => {
    console.log(line);
    /* const [element, instructions] = line.split(" = ");
    const next = instructions
      .substring(instructions.indexOf("(") + 1, instructions.lastIndexOf(")"))
      .trim()
      .split(", ");

    return {
      element,
      next,
    }; */

    return 0;
  });

  return;

  // let directions = resetDirections();

  // console.log(rl.length);
  // console.log(network);

  let currentNode = network[0];
  let steps = 0;

  while (currentNode.element !== "ZZZ") {
    // console.log(directions);
    console.log(directions.length);

    if (directions.length === 0) {
      console.log(resetDirections());
      // directions = resetDirections();
      break;
    }

    if (!directions) {
      // console.log(currentNode);
      // break
    }

    const direction = directions.shift();
    // console.log(direction);

    if (direction === "L") {
      const [left, right] = currentNode.next;
      if (left === "ZZZ") {
        console.log(left);
      }

      const next = network.find((n) => n.element === left);
      if (next) {
        currentNode = next;
        steps++;

        if (currentNode.element === "ZZZ") {
          console.log("reached");
          break;
        }
      }
    }

    if (direction === "R") {
      const [left, right] = currentNode.next;
      const next = network.find((n) => n.element === right);
      if (next) {
        currentNode = next;
        steps++;

        if (currentNode.element === "ZZZ") {
          break;
        }
      }
    }
  }

  console.log(steps);

  function resetDirections() {
    return input.split("\n").shift()?.split("") as string[];
  }
}

run();
