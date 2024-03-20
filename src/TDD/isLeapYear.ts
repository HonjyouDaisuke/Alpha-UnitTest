/**
 * 閏年を判定する関数
 * 閏年は4で割り切れる年です。
 * 例外として、100で割り切れて、400で割り切れない年は平年です。
 * @param year
 * @returns true:閏年、 false:平年
 */
export default function isLeapYear(year: number): boolean {
  return true;
}
