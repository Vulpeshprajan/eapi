
import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express()

import   cors  from "cors";
import morgan from "morgan";
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(morgan("tiny"))

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
 
// parse application/json
app.use(express.json())

import mongoClient from "./config/db.js";
mongoClient();


// LOAD ROUTERS
import loginRouter from "./routers/login.router.js"
import categoryRouter from "./routers/category.router.js"; 

// USE APIS
app.use('/api/v1/login', loginRouter)
app.use('/api/v1/category', categoryRouter)


 
app.get('/',  (req, res) => {
  res.send('Hello World')
});

// 404 error 
app.use ((req, res, next) => {

  const error = new Error ("Resource not found ")
  error.status = 404;

  next(error);


})


// handle error
import { handleError } from "./utils/errorHandler.js";
app.use((error,req, res, next ) => {
 handleError(error, res)
}) 
 
app.listen(PORT, error => {
if(error) console.log(error)

console.log(`Server is running at http://localhost:${PORT}`);

})