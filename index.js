const express=require("express")
const mongoose=require("mongoose")
const routes=require("./routes")
var bodyParser =require('body-parser')


//ApiDemo is an database name


mongoose.connect('mongodb+srv://Bvasani729:B1234567@cluster0.wluvm.mongodb.net/SPElectronics?retryWrites=true&w=majority').then(()=>{

    var app=express()
    app.use(bodyParser.urlencoded({extended:false}))
    app.use("/api",routes);
    app.use(express.json()) // new
    app.listen(process.env.PORT||3000,()=>
    {
        console.log("Server created")
    })
}).catch((e)=>{
    console.log(e.toString())
})
