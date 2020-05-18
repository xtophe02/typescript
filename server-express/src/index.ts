import express, { Request, Response } from "express";
import cookieSession from "cookie-session";

import "./controllers/LoginController";
import "./controllers/RootController";
import { AppRouter } from "./AppRouter";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["secret"] }));

app.use(AppRouter.getInstance());
app.listen(3000, () => console.log("listen port 3000"));
