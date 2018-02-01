//dependencies
const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const cors = require("cors");

//Middleware
app.use(cors ({
  origin: "http://localhost:4200"
}))

app.use(express.static(path.join(__dirname + "/public/dist")));


//no matching routes
app.get("*", (req,res) => {
  res.sendfile(path.join(__dirname + "/public/dist/index.html"));
});


app.listen(3200, () => console.log("server running on 3200"));
