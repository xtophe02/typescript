import "reflect-metadata";

// const plane = { color: "red" };

// Reflect.defineMetadata("note", "hi there", plane);
// Reflect.defineMetadata("note2", "by there", plane, "color");
// const note = Reflect.getMetadata("note", plane);
// const note2 = Reflect.getMetadata("note2", plane, "color");
// console.log(note);
// console.log(note2);

@controller
class Plane {
  color: string = "red";

  @get("/login")
  fly(): void {
    console.log("vrrr");
  }
}
function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("path", path, target, key);
  };
}

// const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");
// console.log(secret);

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata("path", target.prototype, key);
    console.log(path);
  }
}
