import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { first, second } from "../src/days/day03.ts";

const input = await Deno.readTextFile("./tests/samples/day03.txt");

Deno.test("day 3-1", () => assertEquals(first(input), 157));

Deno.test("day 3-2", () => assertEquals(second(input), 70));
