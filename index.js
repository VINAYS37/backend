// console.log("hi")
const express = require("express")
const mongoose = require("mongoose")
const userRoute = require("./Route/UserRoute")


const app = express()

const PORT = 4000;
app.use(express.json())

app.use("/",userRoute)
mongoose.connect("mongodb+srv://vinay:Vinays3729@cluster0.4k69y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")



app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`)

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })

// app.listen(PORT,()=>{
//     console.log(`server is runninf on port ${PORT}`)
})


