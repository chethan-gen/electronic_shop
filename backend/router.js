//router.js
const express = require("express");
const ElectronicModel = require("./schema");
const Route = express.Router();

Route.post("/post",async(req,res)=>{
 try {
    const{name,price,quantity,description}=req.body;
    if(!name||!price||!quantity||!description||isNaN.price||isNaN.quantity){
       return res.status(400).send("Please fill all the required fields,with accurate values")
    }
    const newElectronic = await ElectronicModel.create({
        name,
        price,
        quantity,
        description,
    });
    res.status(201).send("New electronic gadgect is created successfully")
 } catch (error) {
    res.status(500).send("Something went wrong",error)
    console.log("Something went wrong",error);
 }
});

Route.get("/get",async(req,res)=>{
 try {
    const electronics = await ElectronicModel.find();
    res.status(200).json({message:"Successful",electronics})
 } catch (error) {
    res.status(500).send("Something went wrong",error)
    console.log("Something went wrong",error);
 }
});

Route.put("/put/:id",async(req,res)=>{
 try {
    const{id} = req.params;
    const{name,price,quantity,description}=req.body;
    if(!name||!price||!quantity||!description||isNaN(price)||isNaN(quantity)){
       return res.status(400).send("Please fill all the required fields,with accurate values")
    }
    const updateElectronic = await ElectronicModel.findByIdAndUpdate(id,{name,price,quantity,description},{new:true});
    if(!updateElectronic){
        res.status(400).send("The electronic is not found");
    }
    res.status(200).send("The electronic gadgect is updated successfully")
 } catch (error) {
    res.status(500).send("Something went wrong",error)
    console.log("Something went wrong",error);
 }
});

Route.delete("/delete/:id",async(req,res)=>{
 try {
    const{id}=req.params;
    if(!id){
        res.status(400).send("Please provide a valid ID");
    }
    const deleteElectronic = await ElectronicModel.findByIdAndDelete(id);
    if(!deleteElectronic){
        res.status(400).send("The electronic gadgect is not found")
    }
    res.status(200).send("The electronic gadgect is deleted successfully")
 } catch (error) {
    res.status(500).send("Something went wrong",error)
    console.log("Something went wrong",error);
 }
});

module.exports=Route;