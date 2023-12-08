async function run() {
  const input = await Bun.file(
    new URL(`${import.meta.url}/../input.txt`)
  ).text();
  const lines = input.split("\n");
  const rl = lines.shift()?.split("") as string[];

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
  // console.log(rl.length);
  // console.log(network);

  let currentNode = network[0];
  let steps = 0;

  while (currentNode.element !== "ZZZ") {
    for (const direction of rl) {
      if (direction === "L") {
        const [left, right] = currentNode.next;

        const next = network.find((n) => n.element === left);
        if (next) {
          currentNode = next
          steps++
          
          if (currentNode.element === "ZZZ") {
            console.log("reached")
            break
          }
        }
      }

      if (direction === "R") {
        const [left, right] = currentNode.next;
        const next = network.find((n) => n.element === right);
        if (next) {
          currentNode = next;
          steps++

          if (currentNode.element === "ZZZ") {
            break;
          }
        }
      }
    }
  }

  console.log(steps);
}

run();
