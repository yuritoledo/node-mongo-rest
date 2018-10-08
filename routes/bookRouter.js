import { Router } from 'express'
import Book from '../models/bookModel'

const bookRouter = Router()

bookRouter.route('/')
	.get((req, res) => {
		Book.find({}, (err, books) => res.json(books))
	})
	.post(({ body }, res) => {
		const book = new Book(body)
		book.save()
		res.status(201).json(book)
	})

bookRouter.route('/:id')
	.get(({ params: { id } }, res) => {
		Book.findById(id, (err, book) => res.json(book))
	})
	.patch(({ params, body }, res) => {
		Book.findByIdAndUpdate(id, body, (err, book) => res.json(book))
	})
	.delete(({ params: { id } }, res) => {
		Book.findByIdAndDelete(id, err => {
			err
				? res.status(404).json({ error: true, message: `id ${id} not found` })
				: res.json({ removed: true })
		})
	})


export default bookRouter