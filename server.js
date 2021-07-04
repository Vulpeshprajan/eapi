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

// LOAD ROUTERS
import loginRouter from "./routers/login.router.js"
 

// USE APIS
app.use('/api/v1/login', loginRouter)

 
app.get('/',  (req, res) => {
  res.send('Hello World')
})
 
app.listen(PORT, error => {
if(error) console.log(error)

console.log(`Server is running at http://localhost:${PORT}`);

})