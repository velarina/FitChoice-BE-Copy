const ingredient = require("../models/ingredient");
const nutrient = require("../models/nutrient");
const product = require("../models/product");
const product_ingredient = require("../models/product_ingredient");
const product_nutrient = require("../models/product_nutrient");

module.exports = {
  data: async (_req, res) => {
    try {
      const products = await product.findAll();
      return res.status(200).json({
        status: 200,
        message: "Products succesfully sent",
        products: products,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
  index: async (req, res) => {
    try {
      console.log(req.params);
      const _product = await product.findOne({
        where: {
          productsID: req.params.id,
        },
      });
      if (!_product) {
        return res.status(404).json({
          status: 404,
          message: "Product not found.",
        });
      } else {
        return res.status(200).json({
          status: 200,
          message: "Product succesfully sent.",
          product: _product,
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
  store: async (req, res) => {
    try {
      const _product = await product.create({
        productsName: req.body.productsName,
        productsImage: req.body.productsImage,
        productsBrand: req.body.productsBrand,
        comment: req.body.comment,
        approval: req.body.approval,
        ingredients: req.body.ingredients,
        nutrients: req.body.nutrients,
      });

      return res.status(201).json({
        status: 201,
        message: "Product succesfully created.",
        product: _product,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
  update: async (req, res) => {
    const _product = await product.update(
      {
        productsName: req.body.productsName,
        productsImage: req.body.productsImage,
        productsBrand: req.body.productsBrand,
        comment: req.body.comment,
        approval: req.body.approval,
        ingredients: req.body.ingredients,
        nutrients: req.body.nutrients,
      },
      {
        where: {
          productID: req.params.id,
        },
      },
    );
    if (!_product) {
      return res.status(404).json({
        status: 404,
        message: "Product not found.",
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Product successfully updated.",
        product: _product,
      });
    }
  },
  delete: async (req, res) => {
    await product.destroy({
      where: {
        productID: req.params.id,
      },
    });
    if (!_product) {
      return res.status(404).json({
        status: 404,
        message: "Product not found.",
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Product successfully deleted.",
      });
    }
  },
};
