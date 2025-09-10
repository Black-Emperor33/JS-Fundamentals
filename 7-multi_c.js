const arg = process.argv[2];
const n = Number(arg);

if (!Number.isInteger(n)) {
  console.log("Missing number of occurrences");
} else if (n > 0) {
  let output = "";
  for (let i = 0; i < n; i++) {
    output += "C is fun";
    if (i !== n - 1) output += "\n";
  }
  console.log(output);
}
