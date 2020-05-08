import express from "express";
import cookie from "cookie-session";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});
app.listen(3000, () => console.log("listen port 3000"));
