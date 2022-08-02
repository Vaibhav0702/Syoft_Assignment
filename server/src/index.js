


const express =require('express');

const userController = require("./controllers/user.controller")

const productController = require("./controllers/product.controller");

const { register , login } = require("./controllers/auth.controller")

const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json()); //middleware to convert json into express


app.use("/users",userController);

app.post("/register",register);

app.post("/login",login);

app.use("/product",productController);




module.exports = app ;