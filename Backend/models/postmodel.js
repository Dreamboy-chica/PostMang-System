let mongoose=require("mongoose")
let postsch=new mongoose.Schema({
    "_id":String,   //automatically generted by the uuid
    "title":String,
    "cat":String,
    "body":String,
    "uid":String,
    "name":String,
    "dop":Date, //date format should be "2024-09-27"
    "accept":{
        type:String,
        default:"false"
    },
    "comm":[]

})
let pm=mongoose.model("post",postsch)
module.exports=pm