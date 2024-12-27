// Fix packages

function fixPackages(packages: string): string {
  const invert = (text: string): string => {
    let response: string = "";
    for (let i = 0; i < text.length; i++) {
      response = text[i] + response;
    }
    return response;
  };

  let count: number = 0;
  let accumulator: string[] = [""];
  for (let i = 0; i < packages.length; i++) {
    if (packages[i] === "(") {
      count++;
      accumulator.push("");
      continue;
    }
    if (packages[i] === ")") {
      count--;
      accumulator[count] += invert(accumulator.pop() || "");
      continue;
    }
    accumulator[count] += packages[i];
  }
  return accumulator[0];
}

function fixPackagesBetter(packages: string): string {
  let firstEnd = packages.indexOf(")");

  if (firstEnd != -1) {
    const lastStart = packages.lastIndexOf("(", firstEnd);
    const toRev = [...packages.slice(lastStart + 1, firstEnd)];
    const prefix = packages.slice(0, lastStart);
    const reversed = toRev.reverse().join("");
    const sufix = packages.slice(firstEnd + 1);
    packages = fixPackagesBetter(prefix + reversed + sufix);
  }
  return packages;
}

fixPackages("a(cb)de");
// ➞ "abcde"
// We reverse "cb" inside the parentheses

fixPackages("a(bc(def)g)h");
// ➞ "agdefcbh"
// 1st we reverse "def" → "fed", then we reverse "bcfedg" → "gdefcb"

fixPackages("abc(def(gh)i)jk");
// ➞ "abcighfedjk"
// 1st we reverse "gh" → "hg", then "defhgi" → "ighfed"

fixPackages("a(b(c))e");
// ➞ "acbe"
// 1st we reverse "c" → "c", then "bc" → "cb"
