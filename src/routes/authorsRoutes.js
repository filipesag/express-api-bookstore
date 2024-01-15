import express from 'express';
import AuthorController from '../controllers/authorController.js';

const routes = express.Router();

routes.get("/author", AuthorController.listAuthors);
routes.get("/author/:id", AuthorController.getAuthorById);
routes.post("/author", AuthorController.registerAuthor);
routes.put("/author/:id", AuthorController.updateAuthor);
routes.delete("/author/:id", AuthorController.deleteAuthorById);

export default routes;