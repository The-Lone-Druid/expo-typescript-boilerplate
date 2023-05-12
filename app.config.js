import "dotenv/config"; // Import the dotenv package to load the .env file

module.exports = ({ config }) => {
  const currentEnv = process.env.ENV || "dev";

  switch (currentEnv) {
    case "dev":
      require("dotenv").config({ path: ".env.dev" });
      break;
    case "staging":
      require("dotenv").config({ path: ".env.staging" });
      break;
    case "prod":
      require("dotenv").config({ path: ".env.prod" });
      break;
    default:
      break;
  }

  return {
    ...config,
    extra: {
      ENV: process.env.ENV,
      API_URL: process.env.API_URL,
      API_KEY: process.env.API_KEY
    }
  };
};
