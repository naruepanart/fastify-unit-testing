const { faker } = require("@faker-js/faker");

const LoginService = (email) => {
  if (email !== "abc@gmail.com") {
    return { status: 1, message: "email not found" };
  }

  const result = [
    {
      name: faker.name.fullName(),
      email: faker.internet.email(),
    },
    {
      name: faker.name.fullName(),
      email: faker.internet.email(),
    },
  ];

  return { status: 0, result };
};

module.exports = { LoginService };
