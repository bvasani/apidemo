var express = require('express');
var router = express.Router();
var Accessorie = require('./Models/Accessorie')

//to fetch data from the SPElectronics data base in accessories table
router.get('/accessories', async (req, res) => {
    const accessorie = await Accessorie.find()
    res.send(accessorie)
})

//to insert data to the SPElectronics data base in accessories table
router.post("/accessories", async (req, res) => {
    const accessorie = new Accessorie({
        name: req.body.name,
        price: req.body.price
    })

    await accessorie.save((err, msg) => {
        if (err) {
            res.status(500).json({
                "error": err
            })
        }
        else {
            res.status(200).json({
                "My-message": msg
            })
        }
    })
})

// to update data for the SPElectronics data base in accessories table
router.patch('/accessories/:id',async (req,res)=>{
    const accessorie = await Accessorie.findOne({_id:req.params.id})
    accessorie.name = req.body.name
    accessorie.price = req.body.price
    await accessorie.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })
})

//to delete data for the SPElectronics data base in accessories table
router.delete("/accessories/:name",async(req,res)=>{
    await Accessorie.deleteOne({name:req.params.name},(err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })
    const accessorie = await Accessorie.find()
            res.send(accessorie)
})

module.exports = router;