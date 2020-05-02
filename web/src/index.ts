import { User } from "./models/User";

const user = new User({ name: "teste", age: 0 });
user.on("save", () => console.log(user));
user.save();
