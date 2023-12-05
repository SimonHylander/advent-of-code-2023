import util.DoublyLinkedList
import java.util.LinkedList

class Day05 {

    fun part1(): Int {
        val lines = Util().readInput("day05")
//        println(lines)
        val seeds = lines[0].split("seeds: ")[1].split(" ").map() { it.toLong() }
//        println(seeds)
        var mapIndex = -1

        val shit = DoublyLinkedList<String>();
        shit.add("we")
        shit.add("woo")
        println(shit)

        lines.forEach() {line ->
            if (!line.contains("map:")) {

            }
        }

        return 0
    }

    fun part2(): Int {
        val lines = Util().readInput("day05")
        return 0
    }
}