async function run() {
  const input = await Bun.file(new URL(`${import.meta.url}/../input.txt`)).text();
  const lines = input.split("\n");

  const calibrationNumbers: string[] = []

  for (const line of lines) {
    let firstFound = false;
    let first = "";
    let lastDigitInString: string | undefined;

    for (let i = 0; i < line.length; i++) {
      if (!firstFound && !isNaN(+line[i])) {
        first = line[i];
        firstFound = true;
        continue;
      }

      if (firstFound && isNaN(+line[i])) {
        continue;
      }
      
      if (!isNaN(+line[i])) {
        lastDigitInString = line[i];
      }
    }

    if (!lastDigitInString) {
      calibrationNumbers.push(first + first);
    } else {
      calibrationNumbers.push(first + lastDigitInString);
    }
  }

  const result = calibrationNumbers.map(Number).reduce((a, b) => a+b, 0);
  console.log(result)
}

run();
