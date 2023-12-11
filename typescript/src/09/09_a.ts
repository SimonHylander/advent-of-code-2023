async function run() {
  const input = await Bun.file(
    new URL(`${import.meta.url}/../input.txt`)
  ).text();
  const lines = input.split("\n");

  const mapped = lines.map((history) => history.split(" ").map(Number));

  for (let i = 0; i < mapped.length; i++) {
    console.log(mapped[i]);

    // const seq = mapped[i].map((n, j)=> mapped[i][j+1] - mapped[i][j])
    let seq = sequence(mapped[i])
    while(!seq.every(n => n === 0)) {
      seq = sequence(seq)
      console.log(seq)
    }
    console.log(seq)
    break;
  }

  function sequence(input: number[]) {
    return input.map((_, j)=> input[j+1] - input[j])
  }
}

run();
