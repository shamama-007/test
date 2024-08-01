const mongoose = require("mongoose");

const mongoDBConnect = () => {
  mongoose.connect(process.env.DB_URL).then((data) => {
    console.log(`CONNECTION SUCCESSFULLY ${data.connection.host}`);
  });
};

module.exports = mongoDBConnect;
