import express from 'express';
import BookController from '../controllers/bookController.js';

const routes = express.Router();

routes.get("/books", BookController.listBooks);
routes.get("/books/busca", BookController.searchByEditora);
routes.get("/books/:id", BookController.getBookById);
routes.post("/books", BookController.registerBook);
routes.put("/books/:id", BookController.updateBook);
routes.delete("/books/:id", BookController.deleteBookById);

export default routes;