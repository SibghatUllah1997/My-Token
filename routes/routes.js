const Router = require("express").Router();
const bodyparser = require("body-parser");
const controller = require("../controller/controller");

Router.get("/", controller.totalSupply);
Router.get("/totalsupply", controller.totalSupply);
Router.post("/balances", controller.balanceOf);
Router.post("/allowance", controller.allowance);
Router.post("/transfer", controller.transfer);
Router.post("/approve", controller.approve);
Router.post("/transferfrom", controller.transferFrom);

module.exports = Router;
