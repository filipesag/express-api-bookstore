import { author } from '../models/Author.js';

class AuthorController {

    static async listAuthors (req, res, next) {
        try {
            const listAuthors = await author.find({});
            res.status(200).json(listAuthors);
        } catch(erro) {
            next(erro);
        }
    }

    static async registerAuthor(req, res, next) {
        try{
            const newAuthor = await author.create(req.body);
            res.status(201).json({ message: "Author Successfuly Registered", author: newAuthor});
        } catch(erro) {
            next(erro);
        }
    }

    static async getAuthorById (req, res, next) {
        try {
            const id = req.params.id;
            const getAuthorById = await author.findById(id);
            if(getAuthorById !== null) {
                res.status(200).json(getAuthorById);
            }else {
                res.status(404).json({ message: 'Sorry! This actor does not exist.'});
            }
        } catch(erro) {
            next(erro);
        }
    }

    static async updateAuthor (req, res, next) {
        try {
            const id = req.params.id;
            const updateAuthor = await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "The author has been updated.", author: updateAuthor });
        } catch(erro) {
            next(erro);
        }
    }

    
    static async deleteAuthorById (req, res, next) {
        try {
            const id = req.params.id;
            await author.findByIdAndDelete(id);
            res.status(200).json({ message: "The author has been deleted."});
        } catch(erro) {
            next(erro);
        }
    }   
}

export default AuthorController;