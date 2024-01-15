import { author } from '../models/Author.js';

class AuthorController {

    static async listAuthors (req, res) {
        try {
            const listAuthors = await author.find({});
            res.status(200).json(listAuthors);
        } catch(erro) {
            res.status(500).json({ message: '${erro.message} - Request has been failed.'})
        }
    };

    static async registerAuthor(req, res) {
        try{
            const newAuthor = await author.create(req.body);
            res.status(201).json({ message: "Author Successfuly Registered", author: newAuthor})
        } catch(erro) {
            res.status(500).json({ message: '${erro.message} - Register has been failed'});
        }
    };

    static async getAuthorById (req, res) {
        try {
            const id = req.params.id;
            const getAuthorById = await author.findById(id);
            res.status(200).json(getAuthorById);
        } catch(erro) {
            res.status(500).json({ message: '${erro.message} - Request has been failed.'})
        }
    };

    static async updateAuthor (req, res) {
        try {
            const id = req.params.id;
            const updateAuthor = await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "The author has been updated.", author: updateAuthor});
        } catch(erro) {
            res.status(500).json({ message: '${erro.message} - Request has been failed.'})
        }
    };

    
    static async deleteAuthorById (req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndDelete(id);
            res.status(200).json({ message: "The author has been deleted."});
        } catch(erro) {
            res.status(500).json({ message: '${erro.message} - Delete has been failed.'})
        }
    };   
}

export default AuthorController;