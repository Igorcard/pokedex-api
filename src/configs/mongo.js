import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const {
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
  DB_POOL_MAX,
  DB_POOL_MIN
} = process.env

const authPart = DB_USERNAME && DB_PASSWORD ? `${DB_USERNAME}:${DB_PASSWORD}@` : ''
const uri = `mongodb://${authPart}${DB_HOST}:${DB_PORT}/${DB_DATABASE}`

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: parseInt(DB_POOL_MAX) || 10,  
  minPoolSize: parseInt(DB_POOL_MIN) || 1,   
  serverSelectionTimeoutMS: 5000,           
}

export async function connectDatabase() {
  try {
    await mongoose.connect(uri, mongooseOptions)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message)
    process.exit(1)
  }
}

export { mongoose }