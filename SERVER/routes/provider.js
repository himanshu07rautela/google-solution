let {Router}=require("express");
let router=Router();

const {provider}=require("../db/mongoose");
const jwt=require('jsonwebtoken');
const {JWT_KEY}=require("../secret");

// function getemail(token){
//     const words = token.split(" ");
//     const jwtToken = words[1];
//     const decoded = jwt.decode(jwtToken);
//     const email = decoded.email;
//     return email;
// }
// for signup for new users
router.post('/signup',async(req,res)=>{
    let email=req.body.email;
    let password=req.body.password;
    let exists=await provider.findOne({
        provider:provider
    })
    if(exists){
        res.status(403).json({
            message:"user with this username already exists"
        })
        return;
    }else{
        await provider.create({
            email,
            password
        });
        res.json({
            message:"provider id has been created"
        })
    }
});
// for login , for existing users
router.post('/signin',async(req,res)=>{
    let email=req.body["email"];
    const password = req.body["password"];
    const user = await provider.findOne({
        email: email,
        password: password
    });

    if (user) {
        const token = jwt.sign({ email }, JWT_KEY);
        res.json({
            token: "Bearer " + token
        });
    } else {
        res.status(404).json({
            message: "User not found"
        });
    }

})

module.exports=router