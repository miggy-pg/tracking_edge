import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";
import { randomGender } from "./utils/randomGender";

// We are using the 'implmenets' keyword to ensure that the UserMappable class has the properties defined in the Mappable interface
// This is like a helper to pinpoint where exactly the error occurs if the properties are not defined
// Unlike the how we implmented it on index.ts wherein we are not sure if the object passed to the addMarker method has the properties defined
export class UserMappable implements Mappable {
  name: string;
  email: string;
  gender: string;
  age: number;
  location: {
    lat: number;
    lng: number;
  };
  // So to fix the error, we can add the color property here
  // color: string = "red";

  constructor() {
    this.name = faker.name.firstName();
    this.email = faker.internet.email();
    this.gender = randomGender();
    this.age = faker.number.int({ min: 18, max: 100 });
    this.location = {
      lat: faker.address.latitude(),
      lng: faker.address.longitude(),
    };
  }

  markerContent(): string {
    return this.name;
  }
}
