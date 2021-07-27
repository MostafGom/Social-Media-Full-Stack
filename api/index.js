const express = require('express')
const app = express()

const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')

const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')

dotenv.config()

try {
  mongoose.connect(process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,

    }, () => {
      console.log("connection to db ✔️");
    });

} catch (error) {
  console.log(error);
}



// middleware
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)


app.listen(8800, () => {
  console.log('ready for dev');
})