const autoload = require("@fastify/autoload");
const path = require("path");
const app = require("fastify")({ logger: false });

app.get("/", async (req, res) => {
  return { status: 0 };
});

app.register(autoload, {
  dir: path.join(__dirname, "src"),
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
