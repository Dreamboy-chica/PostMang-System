let express=require("express")
const { adduser, login } = require("../controlers/usercon")
const { addpost, getposts, getbycat, getdonebyme } = require("../controlers/postcont")
let route=new express.Router()
route.post("/adduser",adduser)
route.post("/login",login) 


route.post("/addpost",addpost)
route.get("/get",getposts)
route.get("/getbycat/:cat",getbycat)
route.get("/getdonebyme/:uid",getdonebyme)
module.exports=route