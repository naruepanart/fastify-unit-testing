const { LoginService } = require("./service/login");

// Require the framework and instantiate it
const app = require("fastify")({ logger: false });

const midd1 = async (req, res, next) => {
  req.user = "abc1@gmail.com";
  next();
};

// Declare a route
app.get("/", { preHandler: midd1 }, async (req, res) => {
  const email = req.user;
  const response = await LoginService(email);
  return response;
});

// Run the server!
const start = async () => {
  try {
    await app.listen({ port: 3000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
