const router = async (app) => {
  app.get("/", async function (req, res) {
    return { message: "/login" };
  });
};

module.exports = router;
