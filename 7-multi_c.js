const arg = process.argv[2];
const x = Number(arg);

if (!Number.isInteger(x)) {
  console.log("Missing number of occurrences");
} else if (x > 0) {
  let output = "";
  for (let i = 0; i < x; i++) {
    output += "C is fun";
    if (i !== n - 1) output += "\n";
  }
  console.log(output);
}
