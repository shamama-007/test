const dotenv = require('dotenv');
const express = require('express');
const Order = require('./orderModel')
const mongoDBConnect = require("./db")
const app = express();
dotenv.config();

mongoDBConnect()

app.get("/api/v1/data", async (req, res) => {
	const data = await Order.find();
	res.json({data})
});


app.get("/api/v1/get", async (req, res) => {
	res.json({success: "true", message: "ok"})
});

app.listen(process.env.PORT, () => {
	console.log(`SERVER IS LISTERN http://localhost:${
		process.env.PORT
	}`)
})
