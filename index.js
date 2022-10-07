const { LoginService } = require("./service/login");
const autoload = require("@fastify/autoload");
const path = require("path");
const app = require("fastify")({ logger: false });

const midd1 = async (req, res, next) => {
  req.user = "abc@gmail.com";
  next();
};

app.get("/", { preHandler: midd1 }, async (req, res) => {
  const email = req.user;
  const response = await LoginService(email);
  return response;
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
