class Day01 {

    fun part1() {
        val fileContent = Util().readFile("day1")
        val lines = fileContent.split("\n")

        val sum = lines.fold(0) { acc, line ->
            var first: String? = null
            var last: String? = null

            line.split("").forEach { char ->
                if (char.toIntOrNull() != null) {
                    if (first == null) {
                        first = char
                    } else {
                        last = char
                    }
                }
            }

            if (last == null) {
                last = first
            }

            acc + (first + last).toInt()
        }

        assert(sum == 54304)
    }

    fun part2() {
        val fileContent = Util().readFile("day1")
        val lines = fileContent.split("\n")

        val numberLetters = mapOf(
            "one" to 1,
            "two" to 2,
            "three" to 3,
            "four" to 4,
            "five" to 5,
            "six" to 6,
            "seven" to 7,
            "eight" to 8,
            "nine" to 9
        )

        fun String.getFirstAndLast () = first().toString() to last().toString()

        val sum = lines.fold(0) { acc, line ->
            val parsedLine = buildString {
                for (i in line.indices) {
                    if (line[i].isDigit()) {
                        append(line[i])
                    } else {
                        val s = line.substring(i)
                        for ((text, number) in numberLetters) {
                            if (s.startsWith(text)) {
                                append(number)
                                break
                            }
                        }
                    }
                }
            }

            val (first, last) = parsedLine.getFirstAndLast()
            acc + (first + last).toInt()
        }

        assert(sum == 54418)
    }
}