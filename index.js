//to create a node server
const express = require ("express");
const cors = require ("cors");
const mongoose = require ("mongoose")//to import mongoose
const router = require ('./routes/route')


//to initialize express
const app = express();
app.use(cors());
app.use(express.json())


//Mongodb connection
const uri = "mongodb+srv://Sylig:119933@mycluster.n19iy9w.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster";


const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

mongoose.connect(uri, clientOptions)
.then(()=>{
console.log("Connection to mongodb done successfully...")
})

.catch((error)=>{
console.log("Error connecting to Mongodb", error)

})

//Node.js and Express Server
app.use('', router.routes)
app.listen(8000, () =>{
    console.log("Server is running on port http://localhost:8000");
})