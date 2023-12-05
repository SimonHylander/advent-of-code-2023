import kotlin.time.TimeSource

fun main(args: Array<String>) {
    val time = TimeSource.Monotonic

    // Day 1
    var now = time.markNow()
//    println("Day1 P1: ${Day01().part1()} - ${now.elapsedNow()}")
    now = time.markNow()
//    println("Day1 P2: ${Day01().part2()} - ${now.elapsedNow()}")
    println("--------------------------------")

    // Day 2
    now = time.markNow()
//    println("Day2 P1: ${Day02().part1()} - ${now.elapsedNow()}")
    now = time.markNow()
//    println("Day2 P2: ${Day02().part2()} - ${now.elapsedNow()}")
    println("--------------------------------")

    // Day 3
    now = time.markNow()
//    println("Day3 P1: ${Day03().part1()} - ${now.elapsedNow()}")
    now = time.markNow()
//    println("Day3 P2: ${Day03().part2()} - ${now.elapsedNow()}")
    println("--------------------------------")

    // Day 4
    now = time.markNow()
//    println("Day4 P1: ${Day04().part1()} - ${now.elapsedNow()}")
    now = time.markNow()
//    println("Day4 P2: ${Day04().part2()} - ${now.elapsedNow()}")
//    println("--------------------------------")

    // Day 5
    now = time.markNow()
    println("Day5 P1: ${Day05().part1()} - ${now.elapsedNow()}")
    now = time.markNow()
//    println("Day5 P2: ${Day05().part2()} - ${now.elapsedNow()}")
//    println("--------------------------------")
}