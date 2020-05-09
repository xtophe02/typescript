import express, { Request, Response } from "express";
import cookieSession from "cookie-session";

import { router } from "./routes/loginRoutes";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["secret"] }));
app.use(router);
app.listen(3000, () => console.log("listen port 3000"));
