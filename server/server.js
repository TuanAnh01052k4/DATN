import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes/routes.js'
import connectDB from './configs/db.js'
import cookieParser from 'cookie-parser'
const app = express()
dotenv.config()
app.use(express.json())
app.use(cors({
    credentials: true // cho phép gửi cookie
}))
app.use(cookieParser());
app.use(express.urlencoded({
    extended:true
}))
const Port = process.env.PORT;
const dbUrl = process.env.DB_URL;
connectDB(dbUrl)
routes(app)
app.listen(Port,()=>{
    console.log('Server is running')
})