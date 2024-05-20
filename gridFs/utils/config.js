require("dotenv").config();

const env = {
  dev: {
    PORT: process.env.PORT || 3000,
    MONGODB_URL: process.env.MONGODB_URL,
  },
  prod: {
    PORT: process.env.PORT || 4000,
  },
};

module.exports = env[process.env.NODE_ENV || "dev"];
