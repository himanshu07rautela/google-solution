let mongoose=require("mongoose");
mongoose.connect("mongodb+srv://himanshu_rautela:01072003%40Filipinogirl@cluster0.s3mifn2.mongodb.net/");

// schema for scholarshipseekers
let studentschema=new mongoose.Schema({
    email:String,
    password:String,
})
 let providerschema=new mongoose.Schema({
    email:String,
    password:String,
 })

 let  student=mongoose.model("student",studentschema);
 let  provider=mongoose.model("provider",providerschema);

 module.exports={
    student,
    provider
 }