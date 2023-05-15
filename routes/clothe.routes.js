const express = require("express");

const { ClothesModel } = require("../models/ClothesModel");

const clothesRouter = express.Router();

clothesRouter.use(express.json());


clothesRouter.get("/", async (req, res) => {
  const page = req.query.page||0
  try {
    let count = await ClothesModel.find(req.query).countDocuments();
    let data = await ClothesModel.find(req.query).skip(page*10).limit(10);
    res.send({
      message: "All products data",
      count:count,
      status: 1,
      data: data,
      error: false,
    });
  } catch (error) {
    res.send({
      message: "Something went wrong: " + error.message,
      status: 0,
      error: true,
    });
  }
  });

  clothesRouter.get("/:id", async (req, res) => {
    let { id: _id } = req.params;
    try {
      let data = await ClothesModel.find({ _id });
      res.send({
        message: "All products data",
        status: 1,
        data: data,
        error: false,
      });
    } catch (error) {
      res.send({
        message: "Something went wrong: " + error.message,
        status: 0,
        error: true,
      });
    }
  });
  

  clothesRouter.post("/add", async (req, res) => {
    const { imageURL,productName, strikedPrice ,price, itemGender, itemCategory,sale,age} = req.body;
  try{
 
 
        let clothe=new ClothesModel({imageURL,productName, strikedPrice ,price, itemGender, itemCategory,sale,age})
        await clothe.save()
        res.send({'msg':'Added Successfully!'})
      }
catch(err){
  res.send({'msg':err.message})
  }
  })

  clothesRouter.patch("/:id", async (req, res) => {
    let { id: _id } = req.params;
  
    try {
      await ClothesModel.findByIdAndUpdate({ _id }, req.body);
      res.send({
        message: "Product updated",
        status: 1,
        error: false,
      });
    } catch (error) {
      res.send({
        message: "Something went wrong: " + error.message,
        status: 0,
        error: true,
      });
    }
  });
  
  clothesRouter.delete("/:id", async (req, res) => {
    let { id: _id } = req.params;
  
    try {
      await ClothesModel.findByIdAndDelete({ _id });
      res.send({
        message: "Product deleted",
        status: 1,
        error: false,
      });
    } catch (error) {
      res.send({
        message: "Something went wrong: " + error.message,
        status: 0,
        error: true,
      });
    }
  });

  module.exports = {
    clothesRouter,
  };