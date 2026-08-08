// Demo Service A - v7 test
function handler(req, res) {
  console.log("v7 test in Service A");
  return { status: 200, message: "Hello from Service A v7-lambda-test" };
}

module.exports = { handler };
