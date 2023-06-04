export function cutTextToLength(str: string, maxLength: number): string {
  return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
}
export function sluggify(str: string): string {
  const cyrillicLatinMap = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    ө: "u",
    ү: "u",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    э: "e",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "sht",
    ъ: "a",
    ь: "y",
    ю: "yu",
    я: "ya",
  };

  str = str.replace(/^\s+|\s+$/g, ""); // trim whitespace
  str = str.toLowerCase();

  // replace Cyrillic letters with Latin equivalents
  str = str.replace(/[а-я]/g, function (match) {
    return cyrillicLatinMap[match] || match;
  });

  // replace spaces with dashes
  str = str.replace(/\s+/g, "-");

  // remove non-word characters (including Cyrillic letters)
  str = str.replace(/[^\w-а-я]+/g, "");

  return str;
}
