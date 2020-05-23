fun main() {
  val str1 = readLine()
  val str2 = readLine()

  val mergedStr = readLine()

  var result = ""
  var count = 0
  for (i in 0..(mergedStr!!.length - 1)) {
    if (str1!!.length > count && mergedStr[i] === str1!![count]) {
      result += "1"
      count += 1
    }
    else result += "2"
  }

  println(result)
}