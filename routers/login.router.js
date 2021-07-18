import express from "express";
import {loginValidation} from "../middlewares/formValidation.middleware.js";
import { createUser, getUserByEmailPassword } from "../models/user/User.model.js";
const router = express.Router()


router.all("*", (req, res, next) => {
    next()
})

const user = {
    fname: "Sagar",
    lname: "Pyakurel",
    email: "test@mail.com",
    password: "123456"

}

router.post("/",loginValidation, async(req, res) =>{
  try {

    const result = await getUserByEmailPassword(req.body);
    
    if (result?._id){
      res.json({ status:'success',message:"login requested", result});

    }
res.json({status:'error',message:"Invalid login details"});



// router.post()

      
  } catch (error) {
      console.log(error);
    throw new Error (error.message);
      
  }

});

export default router;