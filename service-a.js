// Demo Service A - v28 auto-cascade test
function handler(req, res) {
  console.log("v28 server-side pointer alignment test in Service A");
  return { status: 200, message: "Hello from Service A v28-auto-cascade-test" };
}

module.exports = { handler };
