import { Request, Response, NextFunction } from "express";
import { get, controller, use } from "./decorators";

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session && req.session.loggedIn) {
    next();
  } else {
    res.status(403).send('Not premitted <a href="/login">Login</a>');
  }
};

@controller("")
class RootController {
  @get("/")
  getRoot(req: Request, res: Response): void {
    if (req.session && req.session.loggedIn) {
      res.send(
        '<div><h1>Welcome</h1><a href="/protected">Go to Protected</a><a href="/auth/logout">Logout</a></div>'
      );
    }
    res.redirect("/auth/login");
  }

  @get("/protected")
  @use(requireAuth)
  getProtected(req: Request, res: Response): void {
    res.send(
      '<div><h1>Welcome to the protected</h1><a href="/">Home</a><a href="/auth/logout">Logout</a></div>'
    );
  }
}
