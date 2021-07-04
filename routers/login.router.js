import express from "express";
import {loginValidation} from "../middlewares/formValidation.middleware.js";

const router = express.Router()


router.all("*", (req, res, next) => {
    next()
})

router.post("/",loginValidation, (req, res) =>{
    console.log(req.body);
res.json({message:"login requested"});

});

// router.post()



export default router;