import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company();
console.log(user);
console.log(company);

const map = document.getElementById("map") as Element;

new google.maps.Map(map, {
  zoom: 5,
  center: { lat: user.location.lat, lng: user.location.lng },
});
