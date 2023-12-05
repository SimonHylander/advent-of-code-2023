import java.lang.StringBuilder

class Day03 {

    fun part1(): Int {
        val lines = Util().readInput("day03")
        val grid = lines.map() { it.split("").map() { it.trim() }.filter { it.isNotEmpty() } }

        var sum = 0
        val numbers = mutableListOf<String>()

        val directions = arrayOf(
            // top
            /*intArrayOf(0, -1),
            // right,
            intArrayOf(1, 0),
            // bottom
            intArrayOf(0, 1),
            // left
            intArrayOf(-1, 0),
            // top left
            intArrayOf(-1, -1),
            // top right
            intArrayOf(1, -1),
            // bottom left
            intArrayOf(-1, 1),
            // bottom right
            intArrayOf(1, 1),*/
            intArrayOf(1, 1)
        )

        fun isAdjacent(grid: List<List<String>>, y: Int, x: Int): Boolean {
            for ((yDir, xDir) in directions) {
                if (grid.indices.contains(y + yDir)) {
                    if (grid[y + yDir].indices.contains(x + xDir)) {
                        val (_, symbol) = grid[y + yDir][x + xDir].partition { it.isDigit() }

                        if (symbol.length > 0) {
                            return true
                        }
                    }
                }
            }

            return false
        }

        for ((y, row) in grid.withIndex()) {
            var inNumber = false;
            val number = StringBuilder()
            var isAdjacentToSymbol = false;

            for ((x, char) in row.withIndex()) {
                val (digit, symbol) = char.partition { it.isDigit() }

                // start of number
                if (!inNumber && digit.length > 0) {
                    inNumber = true
                    number.clear()
                }

                if (digit.length > 0) {
                    number.append(char)
                }

                if (inNumber && symbol.length > 0) {
                    if (isAdjacentToSymbol) {
                        sum += number.toString().toInt()
                    }

                    inNumber = false
                }

                if (isAdjacent(grid, y, x)) {
                    isAdjacentToSymbol = true
                }
            }
        }

        println(sum)

        return 0
    }

    fun part2(): Int {
        val lines = Util().readInput("day03")
        return 0
    }
}