class Day04 {

    fun part1(): Int {
        val lines = Util().readInput("day04")

        val cards =
            lines.map() { it.split(": ")[1].split("|").map() { it.trim().split(" ").filter() { it.isNotEmpty() } } }

        val sum = cards.fold(0) { total, card ->
            val (winning, myNumbers) = card
            val points = myNumbers.filter() { winning.indexOf(it) > -1 }
                .foldIndexed(0) { i, acc, _ ->
                    if (i == 0) {
                        acc + 1
                    } else {
                        acc * 2
                    }
                }

            total + points
        }

        assert(sum == 18519)

        return sum
    }

    fun part2(): Int {
        val lines = Util().readInput("day04")

        val cards =
            lines.map() { it.split(": ")[1].split("|").map() { it.trim().split(" ").filter() { it.isNotEmpty() } } }

        val instances = IntArray(cards.size) { 1 }

        cards.forEachIndexed() { i, card ->
            val (winning, myNumbers) = card
            val matches = myNumbers.filter() { winning.indexOf(it) > -1 }
            var count = matches.size

            while (count > 0) {
                instances[i + (count--)] += instances[i]
            }
        }

        val sum = instances.fold(0) { acc, instance ->
            acc + instance
        }

        assert(sum == 30)

        return sum
    }
}