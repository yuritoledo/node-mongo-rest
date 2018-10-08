import mongoose from 'mongoose'

const bookModel = new mongoose.Schema({
	title: { type: String },
	author: { type: String }
})

export default mongoose.model('books', bookModel)