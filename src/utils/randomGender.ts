type Gender = "Male" | "Female";

export const randomGender = (): Gender => {
  const genders: Gender[] = ["Male", "Female"];

  const randomGender = Math.floor(Math.random() * genders.length);
  return genders[randomGender];
};
