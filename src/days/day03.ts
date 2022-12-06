import { chunk, sum } from "../utils.ts";

const findExactCharR = (strings: string[], char: string): string | null => {
  const [string, ...tail] = strings;

  for (const c of string) {
    if (c === char) {
      if (tail.length > 0) {
        return findExactCharR(tail, char);
      } else {
        return char;
      }
    }
  }

  return null;
};

const findExactChar = (strings: string[]) => {
  const [string, ...tail] = strings;

  for (const c of string) {
    const result = findExactCharR(tail, c);

    if (result) {
      return result;
    }
  }

  throw new Error();
};

const computePriority = (char: number) => {
  if (char > 96) {
    return char - 96;
  }

  return char - 64 + 26;
};

export const first = (input: string) => {
  return sum(
    input
      .trim()
      .split("\n")
      .map((s) => [s.slice(0, s.length / 2), s.slice(s.length / 2)])
      .map((a) => findExactChar(a))
      .map((char) => computePriority(char.charCodeAt(0)))
  );
};

export const second = (input: string) => {
  return sum(
    chunk(input.trim().split("\n"), 3)
      .map((a) => findExactChar(a))
      .map((char) => computePriority(char.charCodeAt(0)))
  );
};
