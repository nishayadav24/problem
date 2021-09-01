const mongoose = require('mongoose')

var url = 'mongodb://localhost:27017/data';
mongoose.connect(
  url,
  { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false },
  function (err) {
    if (err) {
      console.log("mongoose Error ", err);
    }
    console.log("connected to mongodb");
  }
);

exports.mongoose=mongoose;
