const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const axios = require("axios");
require("./routes/startup")(app);
if (process.env.NODE_ENV === "production") {
  console.log("App running in production-------------");
  //Express will serve up production assets
  //like our main.js file or main.css file
  const path = require("path");
   app.use(express.static(path.join(__dirname, 'client/build')));
  //app.use(express.static("client/build"));
  //Express will serve up the index.html
  //it it does not recognize the route

  app.get("/*", (req, res) => {
    console.log("Entered production route-------------");
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("App listening on PORT : ", PORT);
});
