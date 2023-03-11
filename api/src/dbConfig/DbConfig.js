import mongoose from 'mongoose'

export const ConnectDb = ()=> {
    try {
        const conn = mongoose.connect(process.env.MONGO_URL)

        conn && console.log('mongo connected')
    } catch (error) {
        next(error)
        
    }
}