import express from 'express'
import 'dotenv/config'
import authRoutes from './routes/authRoutes.js'
import bookRoutes from './routes/bookRoutes.js'
import { connectDB } from './lib/db.js'
import job from './lib/CRON.JS'


const app = express()
const PORT = process.env.PORT || 3000

job.start()
app.use(express.json())
app.use('/api/auth',authRoutes)
app.use('/api/books',bookRoutes)

app.listen(PORT,()=>{
  console.log('Server is running on PORT ',PORT)
  connectDB()
})