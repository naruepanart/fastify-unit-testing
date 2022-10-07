const { faker } = require("@faker-js/faker");

const LoginService = {
  findOneByEmail: async (email) => {
    const EMAIL_USER = "abc123@gmail.com";
    if (email !== EMAIL_USER) {
      return { status: 1, message: "email not found" };
    }

    return { status: 0, response: faker.internet.email };
  },
  findOneByPassword: async (password) => {
    const PASSWORD_USER = "123456";
    if (password !== PASSWORD_USER) {
      return { status: 1, message: "password not match" };
    }
    return { status: 0, response: faker.internet.password };
  },
};

module.exports = { LoginService };
