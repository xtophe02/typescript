import { Request, Response, NextFunction } from "express";
import { get, controller, use, bodyValidator, post } from "./decorators";

// function logger(req: Request, res: Response, next: NextFunction) {
//   console.log("request was made on TS");
// }

@controller("/auth")
class LoginController {
  @get("/login")
  // @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
    <form method="POST">
    <div>
      <label for="">Email</label><input type="email" name="email" id="email" />
    </div>
    <div>
      <label for="">Password</label><input type="password" name="password" id="password" />
    </div>
    <button type="submit">Submit</button>
  </form>
    `);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response): void {
    const { email, password } = req.body;

    if (email === "jdoe@gmail.com" && password === "teste") {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.send("Invalid email or password");
    }
  }

  @get("/logout")
  getLogout(req: Request, res: Response): void {
    if (req.session && req.session.loggedIn) {
      req.session = undefined;
      res.redirect("/auth/login");
    } else {
      res.send("Error");
    }
  }
}
