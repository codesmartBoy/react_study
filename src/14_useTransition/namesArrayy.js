import { faker } from "@faker-js/faker";
const namesArray = [];
for (var i = 0; i < 10000; i++) {
  namesArray.push(faker.address.cityName());
}
console.log(namesArray);
export default namesArray;
