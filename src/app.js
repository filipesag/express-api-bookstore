import express from "express";
import DBconnect from "./config/dbConnect.js";
import book from "./models/Book.js";

const connect = await DBconnect();

connect.on("error", (erro) => {
    console.error("Erro de conexão", erro);
});

connect.once("open", () => {
    console.log("Conexão efetuada com sucesso");
});

const app = express();
app.use(express.json());

app.get("/books", async (req, res)=> {
    const booksList = await book.find({});
    res.status(200).json(booksList);
});

export default app;

