// const person: { name: string; age: number } = {

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
}

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

//person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, 'admin', 'user']

let favouriteActivities: string[];
favouriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());

  // console.log(hobby.map())
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
