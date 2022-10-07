const { LoginService } = require("./service/login");

// Require the framework and instantiate it
const fastify = require("fastify")({ logger: false });

// Declare a route
fastify.get("/", async (req, res) => {
  try {
    const response = await LoginService("abc1@gmail.com");
    return { response };
  } catch (error) {
    res.statusCode = 400;
    return { error : error.message };
  }
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
