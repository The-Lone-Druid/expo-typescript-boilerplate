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
    owner: "thelonedruid",
    extra: {
      ENV: process.env.ENV,
      API_URL: process.env.API_URL,
      API_KEY: process.env.API_KEY,
      eas: {
        projectId: "4af2563f-da51-41fb-8160-2b29f4926fc2"
      }
    },
    android: {
      package: "com.thelonedruid.qrattendance"
    }
  };
};
