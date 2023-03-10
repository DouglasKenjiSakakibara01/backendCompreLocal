const express=require("express");
const app=express();
app.use(express.json());
const consign=require("consign");
const database=require("./config/database")

app.database=database;
consign()
 .then("./api")
 .then("./routes/routes.js")
 .into(app)

app.listen(3002)