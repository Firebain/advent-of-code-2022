import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { first, second } from "../src/days/day02.ts";

const input = await Deno.readTextFile("./tests/samples/day02.txt");

Deno.test("day 2-1", () => assertEquals(first(input), 15));

Deno.test("day 2-2", () => assertEquals(second(input), 12));
