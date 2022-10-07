const { LoginService } = require("./service/login");
const autoload = require("@fastify/autoload");
const path = require("path");
const app = require("fastify")({ logger: false });
const { faker } = require("@faker-js/faker");

const midd1 = async (req, res, next) => {
  req.user = "abc@gmail.com";
  next();
};

app.get("/", { preHandler: midd1 }, async (req, res) => {
  const email = "abc123@gmail.com";
  const pass = "123456";
  const responseEmail = await LoginService.findOneByEmail(email);
  if (responseEmail.status === 1) {
    return { status: responseEmail.status, response: responseEmail.message };
  }
  const responsePass = await LoginService.findOneByPassword(pass);
  if (responsePass.status === 1) {
    return { status: responsePass.status, response: responsePass.message };
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
});

app.register(autoload, {
  dir: path.join(__dirname, "routes"),
  routeParams: true,
});

const start = async () => {
  try {
    await app.listen({ port: 3000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
