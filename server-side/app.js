//CREATE THE SERVER
const express=require("express")
const app=express()
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.json());
app.use(cors());

//Connect to the Database
/* This information should not apear like this in the code,
 in the producion we will use a file .env and mention it in the .gitignore !! */
const userName="salhianwar242"
const password="dEUGEpjATUzppUg1"
mongoose.connect(`mongodb+srv://${userName}:${password}@cluster0.v1tygbz.mongodb.net/mernproject?retryWrites=true&w=majority`)

const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');
app.use('/api/project', projectRoutes);
app.use('/api/task', taskRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log("server works!")
})