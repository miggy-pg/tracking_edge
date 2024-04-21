import { faker } from "@faker-js/faker";

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.address.latitude(),
      lng: faker.address.longitude(),
    };
    this.color = "blue";
  }

  markerContent = (): string => {
    return this.companyName;
  };
}
