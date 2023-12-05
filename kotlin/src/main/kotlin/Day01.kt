import kotlin.io.path.Path

class Day01 {
    private fun String.getFirstAndLast() = first().toString() to last().toString()

    fun part1(): Int {
        val lines = Util().readInput("day01")

        val sum = lines.sumOf { line ->
            var first: Char? = null
            var last: Char? = null

            line.forEach() { char ->
                if (char.isDigit()) {
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

            (first?.toString()?.toInt() ?: 0) + (last?.toString()?.toInt() ?: 0)
        }

        assert(sum == 54304)

        return sum
    }

    fun part2(): Int {
        val lines = Util().readInput("day01")

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

        return sum
    }
}