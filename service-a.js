// Demo Service A - v12 test
function handler(req, res) {
  console.log("v12 test in Service A");
  return { status: 200, message: "Hello from Service A v12-submodule-guard-test" };
}

module.exports = { handler };
