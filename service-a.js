// Demo Service A - v20 test
function handler(req, res) {
  console.log("v20 test in Service A");
  return { status: 200, message: "Hello from Service A v20-clean-body-test" };
}

module.exports = { handler };
