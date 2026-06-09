// Union | (OR)
function printStatusCode(code: string | number) {
  console.log(`Status Code: ${code}`);
}
printStatusCode(200);
printStatusCode("404 Not Found");

// Union Type Errors
function printStatusCodeAgain(code: string | number) {
  console.log(`Status Code: ${code.toUpperCase()}`);
}
