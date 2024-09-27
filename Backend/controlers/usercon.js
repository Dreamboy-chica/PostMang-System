const um = require("../models/usermodel")
let bcrypt=require("bcrypt") //create the password from the plain textpassword
let jwt=require("jsonwebtoken") //generating the token


//Registration of the new-user
let adduser=async(req,res)=>{
    try{
        let hash=await bcrypt.hash(req.body.pwd,10) //creating the hashpassword
        let data=new um({...req.body,"pwd":hash})//user password is updated with the hashpassword
       await data.save()
        res.json({"message":"Registraion Done"})
    }
    catch(err)
    {
        res.json({"message":"Error in creating the user "})
    }
}

//Login for the existing user
let login=async(req,res)=>{
    try{
        //it will take the email from the body and check into the database email is available
        //or not if available ask for password.and it also fetch all the information of that 
        //given email-id and store in the "obj"
        let obj=await um.findById({"_id":req.body._id})
        if(obj)
        {   
            //it take pwd from the body and hashpwd from the obj.this obj contains all the information
            //of the user
            let f=await bcrypt.compare(req.body.pwd,obj.pwd)

            //if pwd. is correct give access to  resources
            if(f)
            {   
            //generating the token(abcd is secret key.it need for generating the secure token)
                let token=jwt.sign({"_id":obj._id},"abcd") 

                //send back token to the client 
                res.json({"token":token,"_id":obj._id,"name":obj.name,"role":obj.role})
            }
            else{
                res.json({"message":"Incorrect Password"})
            }
        }

        else{
            res.json({"message":"Invalid Email"})
        }

    }
    catch(err)
    {
        res.json({"message":"Error in login"})
    }
}
//before giving access to resource it check person is login or not.like if want to add prod,
//into cart.first it ask for sig-in."abcd is secret-key that combine with the pwd and email"

let islogin=(req,res,next)=>{
    try{
        jwt.verify(req.headers.authorization,"abcd") 
        next()

    }
    catch(err)
    {
        res.json({"message":"Please login"})
    }
}

module.exports={adduser,login,islogin}