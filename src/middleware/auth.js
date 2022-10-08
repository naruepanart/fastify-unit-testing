const authMiddleware = async (req, res, next) => {
  req.locals = { email: "abc@gmail.com", pass: "123456" };
  next();
};

module.exports = { authMiddleware };
