import express from 'express';
import books from './booksRoutes.js';
import authors from './authorsRoutes.js';
import errorManipulation from '../middlewares/errorManipulation.js';

const routes = (app) => {
    app.route("/").get((req,res) => res.status(200).send('Node.js!'));

    app.use(express.json(), books, authors);
    app.use(errorManipulation);   
};

export default routes;