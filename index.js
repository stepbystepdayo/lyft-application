const app = require("express")();
const port = 3000;
app.get("/status.html", (req, res) => res.status(200).send("ok"));
app.get("/", (req, res) => res.status(200).send("Hello Everyone!"));
// this is catch all route
app.get("*", (req, res) => res.status(404).send("unsupported route"));
// if we are testing application, export the app to Mocha. if not, start the server
if (module.parent) {
  module.exports = app;
} else {
  app.listen(port, () => {
    console.log("Server running on port:", port);
  });
}
