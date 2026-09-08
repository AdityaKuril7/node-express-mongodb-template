import express from "express"
import dotenv from "dotenv"
dotenv.config()

// Variables

const app = express()
const PORT = process.env.PORT || 3001


// Middlewares and Routes

app.use(express.urlencoded({extended:true}))
app.use(express.json())


// Run Server

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})