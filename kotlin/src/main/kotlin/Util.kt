class Util {
    fun readFile(day: String): String {
        return Util::class.java.getResource("${day}/input.txt")!!.readText();
    }
}