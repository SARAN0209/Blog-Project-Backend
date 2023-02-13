const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./connect");
const Login = require("./Router/User");
const Blog = require("./Router/blog");

dotenv.config();
db();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Wellcome Saran Blogs')
});

/////
app.use("/", Login);
app.use("/blog", Blog);

//PORT
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`App is running on PORT ${PORT}`)
});