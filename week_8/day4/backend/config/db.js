import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
const uri = process.env.MONGO_DB

const db = () => {
    mongoose.connect(uri)
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', () => {
      console.log('connected to database')
    })
}
export default db