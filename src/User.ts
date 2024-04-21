import { faker } from "@faker-js/faker";
import { randomGender } from "./utils/randomGender";

export class User {
  name: string;
  email: string;
  gender: string;
  age: number;
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.name = faker.name.firstName();
    this.email = faker.internet.email();
    this.gender = randomGender();
    this.age = faker.number.int({ min: 18, max: 100 });
    this.location = {
      lat: faker.address.latitude(),
      lng: faker.address.longitude(),
    };
    this.color = "red";
  }

  markerContent(): string {
    return this.name;
  }
}
