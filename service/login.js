const LoginService = (email) => {
  if (email !== "abc@gmail.com") {
    return { status: 1, message: "email not found" };
  }
  return { status: 0, response: email };
};

module.exports = { LoginService };
