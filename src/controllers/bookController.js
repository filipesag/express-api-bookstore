import book from '../models/Book.js';
import { author } from '../models/Author.js';

class BookController {

    static async listBooks (req, res) {
        try {
            const listBooks = await book.find({});
            res.status(200).json(listBooks);
        } catch(erro) {
            res.status(500).json({ message: '${erro.message} - Request has been failed.'})
        }
    };

    static async registerBook(req, res) {
        const newBook = req.body;
        try{
            const authorFound = await author.findById(newBook.autor);
            const bookCompleted = { ...newBook, autor: { ...authorFound._doc }};
            const bookCreated = await book.create(bookCompleted);
            res.status(201).json({ message: "Successfuly Registered", book: bookCreated})
        } catch(erro) {
            res.status(500).json({ message: '${erro.message} - Register has been failed'});
        }
    };

    static async getBookById (req, res) {
        try {
            const id = req.params.id;
            const getBookById = await book.findById(id);
            res.status(200).json(getBookById);
        } catch(erro) {
            res.status(500).json({ message: '${erro.message} - Request has been failed.'})
        }
    };

    static async updateBook (req, res) {
        try {
            const id = req.params.id;
            const updateBook = await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "The book has been updated."});
        } catch(erro) {
            res.status(500).json({ message: '${erro.message} - Request has been failed.'})
        }
    };

    
    static async deleteBookById (req, res) {
        try {
            const id = req.params.id;
            const updateBook = await book.findByIdAndDelete(id);
            res.status(200).json({ message: "The book has been deleted."});
        } catch(erro) {
            res.status(500).json({ message: '${erro.message} - Delete has been failed.'})
        }
    };   
}

export default BookController;