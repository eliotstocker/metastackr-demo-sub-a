// Demo Service A - v28 test
function handler(req, res) {
  console.log("v28 server-side pointer alignment test in Service A");
  return { status: 200, message: "Hello from Service A v28-pointer-alignment-test" };
}

module.exports = { handler };
