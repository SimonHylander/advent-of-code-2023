import { ListFormat } from "typescript";

async function run() {
  const input = await Bun.file(
    new URL(`${import.meta.url}/../input.txt`)
  ).text();

  const lines = [...input.split("\n")];
  let directions = lines.shift()?.split("") as string[];

  const network = lines.slice(1, lines.length).map((line, i) => {
    const [element, instructions] = line.split(" = ");

    const next = instructions
      .substring(instructions.indexOf("(") + 1, instructions.lastIndexOf(")"))
      .trim()
      .split(", ");

    return {
      element,
      next,
    };
  });

  let currentNode = network[0];
  let steps = 0;
  let directionIndex = 0

  console.log(directions.length - 1)

  while (currentNode.element !== "ZZZ") {
    if (directionIndex === directions.length - 1) {
      directionIndex = 0
    }

    // console.log(directions.length);
    /* if (directions.length === 0) {
      // console.log(resetDirections());
      directions = resetDirections();
      // break;
    }

    if (!directions) {
      // console.log(currentNode);
      // break
      continue
    }

    const direction = directions.shift(); */
    // console.log(direction);

    const direction = directions[directionIndex]
    console.log(steps, direction);

    if (steps > 6) {
      break
    }

    if (direction === "L") {
      const [left, right] = currentNode.next;
      if (left === "ZZZ") {
        // console.log(left);
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
