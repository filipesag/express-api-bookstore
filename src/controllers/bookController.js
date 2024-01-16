import book from '../models/Book.js';
import { author } from '../models/Author.js';

class BookController {

    static async listBooks (req, res, next) {
        try {
            const listBooks = await book.find({});
            res.status(200).json(listBooks);
        } catch(erro) {
            next(erro);
        }
    }

    static async registerBook(req, res, next) {
        const newBook = req.body;
        try{
            const authorFound = await author.findById(newBook.autor);
            const bookCompleted = { ...newBook, autor: { ...authorFound._doc }};
            const bookCreated = await book.create(bookCompleted);
            res.status(201).json({ message: "Successfuly Registered", book: bookCreated})
        } catch(erro) {
            next(erro);
        }
    }

    static async getBookById (req, res, next) {
        try {
            const id = req.params.id;
            const getBookById = await book.findById(id);
            if(getBookById !== null){
                res.status(200).json(getBookById);
            }else{
                res.status(404).json({ message: "Sorry! This book does not exist." });
            }
        } catch(erro) {
            next(erro);
        }
    }

    static async updateBook (req, res, next) {
        try {
            const id = req.params.id;
            const updateBook = await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "The book has been updated.", book:updateBook });
        } catch(erro) {
            next(erro);
        }
    }

    
    static async deleteBookById (req, res, next) {
        try { 
            const id = req.params.id;
            const updateBook = await book.findByIdAndDelete(id);
            res.status(200).json({ message: "The book has been deleted.", book:updateBook});
        } catch(erro) {
            next(erro);
        }
    }   

    static async searchByEditora (req, res, next) {
        const editora = req.query.editora;
        try{
            const bookByEditora = await book.find({ editora: editora });
            res.status(200).json(bookByEditora);
        }catch(erro) {
            next(erro);
        }
    }
}

export default BookController;