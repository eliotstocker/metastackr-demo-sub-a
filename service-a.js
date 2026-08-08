// Demo Service A
function handler(req, res) {
  console.log("Processing request in Service A");
  return { status: 200, message: "Hello from Service A" };
}

module.exports = { handler };
