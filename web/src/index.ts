import { User } from "./models/User";

// const user = new User({ name: "Chris", age: 35 });
// console.log(user.get("name"));
// console.log(user.get("age"));
// user.set({ name: "Moreira" });
// console.log(user.get("name"));
// console.log(user.get("age"));

// user.on("change", () => console.log("change 1"));
// user.on("click", () => console.log("change 2"));
// user.on("click", () => console.log("change 3"));

// console.log(user);
// user.trigger("click");

// axios.post("http://localhost:3000/users", {
//   name: "chris",
//   age: 35,
// });

const user = new User({ id: 1 });
user.fetch();
user.set({ name: "Moreira" });
user.save();
// setTimeout(() => {
//   console.log(user);
// }, 4000);
const newUser = new User({ name: "chris", age: 100 });
newUser.save();
