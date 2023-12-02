class Day02 {

    fun part1() {
        val fileContent = Util().readFile("day2")
        val lines = fileContent.split("\n")

        val sum = lines.map {
            it.split(":")[1]
                .split(";")
                .map { it.trim().split(", ") }
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
    }

    fun part2() {
        val fileContent = Util().readFile("day2")
        val lines = fileContent.split("\n")

        val sum = lines.map {
            it.split(":")[1]
                .split(";")
                .map { it.trim().split(", ") }
        }
            .foldIndexed(0) { i, acc, group ->
                val flattened = group.flatMap { it }
                val maxRed = flattened.filter { it.contains("red") }
                    .map { it.split(" ")[0].toInt() }
                    .max()

                val maxGreen = flattened.filter { it.contains("green") }
                    .map { it.split(" ")[0].toInt() }
                    .max()

                val maxBlue = flattened.filter { it.contains("blue") }
                    .map { it.split(" ")[0].toInt() }
                    .max()

                val power = maxRed * maxGreen * maxBlue
                acc + power
            }

        assert(sum == 49710)
    }
}