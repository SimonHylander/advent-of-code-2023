class Day02 {

    fun part1(): Int {
        val lines = Util().readInput("day02")

        val sum = lines.map {
            it.split(":")[1]
                .split(";")
                .map { s -> s.trim().split(", ") }
        }
            .foldIndexed(0) { i, acc, group ->
                val isPossible = group.all {
                    it.all {
                        val (amount, color) = it.trim().split(" ")
                        val num = amount.toInt()

                        (color == "red" && num <= 12) ||
                                (color == "green" && num <= 13) ||
                                (color == "blue" && num <= 14)
                    }
                }

                if (isPossible) {
                    acc + (i + 1)
                } else {
                    acc
                }
            }

        assert(sum == 2683)

        return sum
    }

    fun part2(): Int {
        val lines = Util().readInput("day02")

        val sum = lines.map {
            it.split(":")[1]
                .split(";")
                .map { s -> s.trim().split(", ") }
        }
            .fold(0) { acc, group ->
                val flattened = group.flatten()

                val maxRed = flattened.filter { it.contains("red") }
                    .maxOfOrNull { it.split(" ")[0].toInt() } ?: 0

                val maxGreen = flattened.filter { it.contains("green") }
                    .maxOfOrNull { it.split(" ")[0].toInt() } ?: 0

                val maxBlue = flattened.filter { it.contains("blue") }
                    .maxOfOrNull { it.split(" ")[0].toInt() } ?: 0

                val power = maxRed * maxGreen * maxBlue
                acc + power
            }

        assert(sum == 49710)

        return sum
    }
}