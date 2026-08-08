// Demo Service A - v5 test
function handler(req, res) {
  console.log("v5 test in Service A");
  return { status: 200, message: "Hello from Service A v5-synchronous-lambda" };
}

module.exports = { handler };
