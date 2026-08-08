// Demo Service A - v3 clean test
function handler(req, res) {
  console.log("v3 clean test request in Service A");
  return { status: 200, message: "Hello from Service A v3-clean-test" };
}

module.exports = { handler };
