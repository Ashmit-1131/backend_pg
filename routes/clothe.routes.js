const express = require("express");

const { ClothesModel } = require("../models/ClothesModel");

const clothesRouter = express.Router();

clothesRouter.use(express.json());


clothesRouter.get("/", async (req, res) => {
    try {
      const clothes = await ClothesModel.find();
      res.send(clothes);
    } catch (err) {
      res.send(err.message);
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

  module.exports = {
    clothesRouter,
  };