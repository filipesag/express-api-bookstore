import express from "express";
import DBconnect from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connect = await DBconnect();


connect.on("error", (erro) => {
    console.error("Erro de conexão", erro);
});

connect.once("open", () => {
    console.log("Conexão efetuada com sucesso");
});

const app = express();
routes(app);


export default app;

