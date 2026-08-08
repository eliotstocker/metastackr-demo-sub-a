// Demo Service A
function handler(req, res) {
  console.log("Processing request in Service A - v2");
  return { status: 200, message: "Hello from Service A v2" };
}

module.exports = { handler };
