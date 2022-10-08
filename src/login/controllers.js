const { findOneByEmail, findOneByPassword, findAll } = require("./service");

const login = async (req, res) => {
  const { email, pass } = req.locals;

  const responseEmail = await findOneByEmail(email);
  if (responseEmail.status === 1) {
    return { status: responseEmail.status, response: responseEmail.message };
  }
  const responsePass = await findOneByPassword(pass);
  if (responsePass.status === 1) {
    return { status: responsePass.status, response: responsePass.message };
  }
  const response = await findAll(email, pass);
  if (response.status === 1) {
    return { status: response.status, response: response.message };
  }
  return { status: response.status, result: response.result };
};

module.exports = { login };
