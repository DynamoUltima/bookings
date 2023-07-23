import mongoose  from "mongoose";

console.log('hi')
// console.log(process.env.MONGODB_URI)

const uri= "mongodb+srv://dynamojoey:qkdah68ttfWMZW5K@cluster0.oy0ezya.mongodb.net/test"

export const connectMongo = async() => mongoose.connect(uri) 