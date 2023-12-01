class Day1 {
    fun part1() {
        val fileContent = Util().readFile("day1")
        val lines = fileContent.split("\n")

        var sum = 0;

        lines.forEach { line ->
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

            sum += (first + last).toInt()
        }

        println(sum)
    }

    fun part2() {
        var fileContent = Util().readFile("day1")
        val lines = fileContent.split("\n")

        var sum = 0;

        lines.forEach { line ->
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

            sum += (first + last).toInt()
        }

        println(sum)
    }
}