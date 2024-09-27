let express=require("express")
let mongoose=require("mongoose")
const route = require("./routes/route")
let app=express()
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/Mangement").then(()=>{
    console.log("Database has been connected !")
}).catch((error)=>{
    console.log(error)
})
app.use("/",route)
app.listen(5000,()=>{
    console.log("Server has been started !")
})