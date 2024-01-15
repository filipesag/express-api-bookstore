import express from 'express';
import BookController from '../controllers/bookController.js';

const routes = express.Router();

routes.get("/books", BookController.listBooks);
routes.post("/books", BookController.registerBook);
routes.get("/books/:id", BookController.getBookById);
routes.put("/books/:id", BookController.updateBook);
routes.delete("/books/:id", BookController.deleteBookById);

export default routes;