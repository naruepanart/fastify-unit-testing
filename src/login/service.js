const { faker } = require("@faker-js/faker");

const findAll = async (email, pass) => {
  if (!email) {
    return { status: 1, message: "email is required" };
  }
  if (!pass) {
    return { status: 1, message: "email is required" };
  }
  const EMAIL_USER = "abc@gmail.com";
  const PASSWORD_USER = "123456";
  if (email !== EMAIL_USER || pass !== PASSWORD_USER) {
    return { status: 1, message: "email or password not match" };
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

const findOneByEmail = async (email) => {
  if (!email) {
    return { status: 1, message: "email is required" };
  }
  const EMAIL_USER = "abc@gmail.com";
  if (email !== EMAIL_USER) {
    return { status: 1, message: "email not found" };
  }
  return { status: 0, response: faker.internet.email };
};

const findOneByPassword = async (password) => {
  if (!password) {
    return { status: 1, message: "email is required" };
  }
  const PASSWORD_USER = "123456";
  if (password !== PASSWORD_USER) {
    return { status: 1, message: "password not match" };
  }
  return { status: 0, response: faker.internet.password };
};

module.exports = { findAll, findOneByEmail, findOneByPassword };
