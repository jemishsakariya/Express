require("dotenv").config();

const env = {
  dev: {
    PORT: process.env.PORT || 3000,
    JWT_SECRET: process.env.JWT_SECRET,
  },
  prod: {
    PORT: process.env.PORT || 4000,
  },
};

module.exports = env[process.env.NODE_ENV || "dev"];
