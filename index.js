const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const axios = require("axios");
const path = require("path");
require("./routes/startup")(app);
if (process.env.NODE_ENV === "production") {
  console.log("App running in production-------------");
  const path = require("path");
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    console.log("Entered production route-------------");
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("App listening on PORT : ", PORT);
});
