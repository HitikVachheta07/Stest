const mongoose = require('mongoose');
const dotenv= require('dotenv');
dotenv.config({path:'./config.env'});
const express = require('express');

const app = express();

const DB = "mongodb://admin:your-secure-password@34.239.123.93:27017/admin";

mongoose.connect(DB,{{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase timeout
  authSource: "admin"
}
}).then(con => {
    console.log('DB connection successfull');
}).catch((err) => {
    console.error('Error connecting to DB:',err)
});

app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`🚀 Server is running on ${PORT}`);
})
