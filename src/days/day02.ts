import { sum } from "../utils.ts";

const scoreForChar = (char: number) => (char > 67 ? char - 87 : char - 64);
const computeResult = (char: number) => {
  if (char === 0) {
    return 0;
  }

  const result = char < 0 ? !(Math.abs(char) - 1) : Boolean(char - 1);

  return result ? 1 : -1;
};
const scoreForResult = (char: number) => (computeResult(char) + 1) * 3;
const replaceChar = (opponent: number, char: number) => {
  const result = opponent + (char - 89) + 23;

  if (result > 90) {
    return 88;
  }

  if (result < 88) {
    return 90;
  }

  return result;
};

const solve =
  (callback: (arr: [a: number, b: number]) => [number, number]) =>
  (input: string) =>
    sum(
      input
        .trim()
        .split("\n")
        .map(
          (value) =>
            value.split(" ").map((char) => char.charCodeAt(0)) as [
              number,
              number
            ]
        )
        .map((arr) => callback(arr))
        .map(([a, b]) => scoreForResult(a - b + 23) + scoreForChar(b))
    );

export const first = solve((arr) => arr);

export const second = solve(([a, b]) => [a, replaceChar(a, b)]);
