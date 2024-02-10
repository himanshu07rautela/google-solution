let {Router}=require("express");
let router=Router();
let usermiddleware=require("../middleware/usermiddleware")
const {student}=require("../db/mongoose");
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
    let exists=await student.findOne({
        email:email
    })
    if(exists){
        res.status(403).json({
            message:"user with this username already exists"
        })
        return;
    }else{
        await student.create({
            email:email,
            password:password
        });
        res.json({
            message:"student id has been created"
        })
    }
});
// for login , for existing users
router.post('/signin',async(req,res)=>{
    let email=req.body["email"];
    const password = req.body["password"];
    const stud = await student.findOne({
        email: email,
        password: password
    });

    if (stud) {
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
router.get('/landing',usermiddleware, async (req, res) => {
    // Implement course creation logic
   

   

    res.json({
        message: "going to the landing page"
    });
});

 module.exports=router;
