const routes = async (app) => {
    app.get("/", async function (req, res) {
      return { message: "/login" };
    });
  };
  
  module.exports = routes;
  