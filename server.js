//dependencies
const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();


app.use(express.static(path.join(__dirname + "/public/dist")));


//no matching routes
app.get("*", (req,res) => {
  res.sendfile(path.join(__dirname + "/public/dist/index.html"));
});


app.listen(3200, () => console.log("server running on 3200"));
