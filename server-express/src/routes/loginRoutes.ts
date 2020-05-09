import { Router, Request, Response, NextFunction } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}
const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session && req.session.loggedIn) {
    next();
  } else {
    res.status(403).send('Not premitted <a href="/login">Login</a>');
  }
};
const router = Router();
router.get("/", (req: Request, res: Response): void => {
  if (req.session && req.session.loggedIn) {
    res.send(
      '<div><h1>Welcome</h1><a href="/protected">Go to Protected</a><a href="/logout">Logout</a></div>'
    );
  }
  res.redirect("/login");
});
router.get("/login", (req: Request, res: Response): void => {
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
});

router.post("/login", (req: RequestWithBody, res: Response): void => {
  const { email, password } = req.body;

  if (email && password && email === "jdoe@gmail.com" && password === "teste") {
    req.session = { loggedIn: true };
    res.redirect("/");
  } else {
    res.send("Invalid email or password");
  }
});
router.get("/logout", (req: Request, res: Response): void => {
  if (req.session && req.session.loggedIn) {
    req.session = undefined;
    res.redirect("/login");
  } else {
    res.send("Error");
  }
});
router.get("/protected", requireAuth, (req: Request, res: Response): void => {
  res.send(
    '<div><h1>Welcome to the protected</h1><a href="/">Home</a><a href="/logout">Logout</a></div>'
  );
});

export { router };
