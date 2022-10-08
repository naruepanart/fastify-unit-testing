const { authMiddleware } = require("../middleware/auth");
const { login } = require("./controllers");

const router = async (app) => {
  app.get("/", { preHandler: authMiddleware }, login);
};

module.exports = router;
