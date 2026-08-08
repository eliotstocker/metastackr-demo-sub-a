// Demo Service A - v4 live lambda test
function handler(req, res) {
  console.log("v4 live lambda test in Service A");
  return { status: 200, message: "Hello from Service A v4-live-lambda-test" };
}

module.exports = { handler };
