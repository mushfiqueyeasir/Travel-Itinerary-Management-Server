const jwt = require("jsonwebtoken");

exports.generateToken = (userInfo) => {
  const payLoad = {
    name: userInfo.name,
    imgURL: userInfo.imgURL,
    email: userInfo.email,
    role: userInfo.role,
    userId: userInfo.agentId,
  };

  const token = jwt.sign(payLoad, process.env.TOKEN_SECRET, {
    expiresIn: "30days",
  });

  return token;
};
