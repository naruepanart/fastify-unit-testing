const router = async (app) => {
  app.get("/", async function (req, res) {
    return { message: "/users" };
  });
};

module.exports = router;
