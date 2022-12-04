const day = parseInt(Deno.args[0], 10);

if (Number.isNaN(day) || day < 1 || day > 25) {
  console.error("You have to choose a day between 1 and 25");
  console.error("For example: deno task gen 1");
  Deno.exit(1);
}

const paddedDay = day.toString().padStart(2, "0");

const sourceTemplate = `export const first = (input: string) => {
  return 1;
};

export const second = (input: string) => {
  return 1;
};
`

await Deno.writeTextFile(`./src/days/day${paddedDay}.ts`, sourceTemplate)

const testTemplate = `import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { first, second } from "../src/days/day${paddedDay}.ts";

const input = await Deno.readTextFile("./tests/samples/day${paddedDay}.txt");

Deno.test("day ${day}-1", () => assertEquals(first(input), 1));

Deno.test("day ${day}-2", () => assertEquals(second(input), 1));
`;

await Deno.writeTextFile(`./tests/day${paddedDay}.test.ts`, testTemplate)

await Deno.writeTextFile(`./tests/samples/day${paddedDay}.txt`, "")