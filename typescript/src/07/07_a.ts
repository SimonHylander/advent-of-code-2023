async function run() {
  const input = await Bun.file(
    new URL(`${import.meta.url}/../input.txt`)
  ).text();
  const lines = input.split("\n");
  // console.log(lines);

  const strength = [
    "A",
    "K",
    "Q",
    "J",
    "T",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
  ];

  // console.log('high', isHighCard(["A", "1","2","3","B"]))
  // console.log("onep", isOnePair(["A", "2", "3", "A", "4"]));
  console.log("onep", isTwoPair(["A", "2", "3", "A", "4"]));

  const mapped = lines
    .map((line) => {
      const [hand, bid] = line.split(" ");
      // getType(hand);
      // getType("AA8AA")
      return { hand, bid };
    })
    .sort((a, b) => {
      console.log();
      return -1;
    });
}

function getType(hand: string) {
  const chars = hand.split("");
  const fiveOfKind = isFiveOfKind(chars);
  // console.log(chars);
  const fourOfKind = isFourOfKind(chars);
}

const isFiveOfKind = (chars: string[]) =>
  chars.every((char) => char === chars[0]);

function isFourOfKind(chars: string[]) {
  const map = {};
  chars.forEach((char) => {
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  });

  const found = Object.keys(map).filter((key) => {
    return map[key] === 4;
  });

  return found.length > 0;
}

// Three of a kind, where three cards have the same label, and the remaining two cards are each different from any other card in the hand: TTT98
function isThreeOfKind(chars: string[]) {
  const map = {};
  chars.forEach((char) => {
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  });

  const found = Object.keys(map).filter((key) => {
    return map[key] === 3;
  });

  return found.length > 0;
}

// where two cards share one label, two other cards share a second label, and the remaining card has a third label: 23432
function isTwoPair(chars: string[]) {
  const map = {};
  chars.forEach((char) => {
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  });

  const hasTwo = [];
  Object.keys(map).forEach((key) => {
    if (map[key] === 2) {
      hasTwo.push(key);
    }
  });

  if (hasTwo.length === 0 || hasTwo.length > 1) {
    return false
  }

  // return found.length > 0;
}

// where two cards share one label, and the other three cards have a different label from the pair and each other: A23A4
function isOnePair(chars: string[]) {
  const map = {};
  chars.forEach((char) => {
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  });

  const hasTwo = [];
  Object.keys(map).forEach((key) => {
    if (map[key] === 2) {
      hasTwo.push(key);
    }
  });

  if (hasTwo.length === 0 || hasTwo.length > 1) {
    return false
  }


  const unique = chars.filter((c, i) => c !== hasTwo[0]  && chars.indexOf(c) === i)

  return unique.length === (chars.length - 2)
}

// where all cards' labels are distinct: 23456
function isHighCard(chars: string[]) {
  const unique = [];

  for (const char of chars) {
    if (unique.indexOf(char) === -1) {
      unique.push(char);
    }
  }

  return unique.length === chars.length;
}

run();
