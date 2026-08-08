// Demo Service A - v2 test
function handler(req, res) {
  console.log("v2 test request in Service A");
  return { status: 200, message: "Hello from Service A v2-test" };
}

module.exports = { handler };
