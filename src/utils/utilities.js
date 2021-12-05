export const READING_RATE = 200

export function countWords(str) {
  str = str.replace(/(^\s*)|(\s*$)/gi, "")
  str = str.replace(/[ ]{2,}/gi, " ")
  str = str.replace(/\n /, "\n")
  return str.split(" ").length
}
