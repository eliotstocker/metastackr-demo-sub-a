// Demo Service A - v18 test
function handler(req, res) {
  console.log("v18 test in Service A");
  return { status: 200, message: "Hello from Service A v18-pr-body-merge-test" };
}

module.exports = { handler };
