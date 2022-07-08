const env = process.env.NODE_ENV || "LOCAL";

const LOCAL = {
  server: {
    environment: "LOCAL",
    port: 5000,
  },
  db: {
    uri: process.env.DB_URI,
  },
};

const config = {
  LOCAL,
};

module.exports = config[env];
