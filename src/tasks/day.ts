const day = parseInt(Deno.args[0]);

if (Number.isNaN(day) || day < 1 || day > 25) {
  console.error("You have to choose a day between 1 and 25");
  console.error("For example: node src/index.js 1");
  Deno.exit(1);
}

const paddedDay = day.toString().padStart(2, "0");

const type = Deno.args[0].slice(-1) === "+" ? "second" : "first";
const test = Deno.args[1] === "!";
const code = await import(`../days/day${paddedDay}.ts`);
const callback = code[type];

if (test) {
  const input = await Deno.readTextFile(`./tests/samples/day${paddedDay}.txt`);

  console.log(callback(input));
} else {
  const session = await Deno.readTextFile("./session.txt");

  const response = await fetch(
    `https://adventofcode.com/2022/day/${day}/input`,
    {
      headers: {
        Cookie: `session=${session}`,
      },
    }
  );

  const input = await response.text();

  console.log(callback(input));
}
