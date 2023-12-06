async function run() {
  const input = await Bun.file(new URL(`${import.meta.url}/../input.txt`)).text();
  const lines = input.split("\n");

  const [time, distance] = lines.map((line) => line.startsWith("Time:") ? [line.split("Time:")[1].trim()] : [line.split("Distance:")[1].trim()]);

  const mmPerMs = 0
  // Your toy boat has a starting speed of zero millimeters per millisecond.
  // For each whole millisecond you spend at the beginning of the race holding down the button,
  // the boat's speed increases by one millimeter per millisecond.

// determine number of ways you can beat the record

  time.forEach((time, i) => {
    const races = time.split(" ").map(Number).filter(n => n > 0);
    console.log(races)
    races.forEach(race => {
      console.log(race)
    })
  })
}

run();
