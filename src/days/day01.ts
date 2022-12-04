import { sum } from "../utils.ts";

const parse = (input: string) =>
  input
    .trim()
    .split("\n\n")
    .map((chunk) => chunk.split("\n").map((value) => parseInt(value)));

export const first = (input: string) => {
  return Math.max(...parse(input).map(sum));
};

export const second = (input: string) => {
  return sum(
    parse(input)
      .map(sum)
      .sort((a, b) => b - a)
      .slice(0, 3)
  );
};
