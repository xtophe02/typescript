import { User } from "./models/User";

const all = User.buildCollection();

all.on("fetch", () => console.log(all));

all.fetch();
