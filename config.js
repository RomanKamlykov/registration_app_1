module.exports = {
  database: {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
    DIALECT: process.env.DIALECT,
  },
  server: {
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET,
  },
};
