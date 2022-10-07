const routes = async (app) => {
  app.get("/", async function (req, res) {
    return { message: "/users" };
  });
};

module.exports = routes;
