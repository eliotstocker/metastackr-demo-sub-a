// Demo Service A
function handler(req, res) {
  return { status: 200, message: "Hello from Service A" };
}

module.exports = { handler };
