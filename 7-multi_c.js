const x = Number(process.argv[2]);

if (!Number.isInteger(x) || x <= 0) {
  console.log("Missing number of occurrences");
} else {
  let result = "";
  for (let i = 0; i < x; i++) {
    result += "C is fun\n";
  }
  console.log(result.trim());
}
