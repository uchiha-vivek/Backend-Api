import express from "express";
import mongoose from 'mongoose'
import router from "./routes/user-router";
import blogRouter from "./routes/front-router";

const app = express()

app.use(express.json())
app.use("/api/user",router)
app.use("/api/blog",blogRouter) 
 



mongoose.connect('mongodb+srv://vs160125:madara_uchiha@cluster0.8yubopf.mongodb.net/Blog?retryWrites=true&w=majority')

.then(() =>app.listen(5000)).then(() => console.log("connected to database"))
.catch((err) => console.log(err))
 
 