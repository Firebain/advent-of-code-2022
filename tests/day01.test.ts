import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { first, second } from "../src/days/day01.ts";

const input = await Deno.readTextFile("./tests/samples/day01.txt");

Deno.test("day 1-1", () => assertEquals(first(input), 24000));

Deno.test("day 1-2", () => assertEquals(second(input), 45000));
