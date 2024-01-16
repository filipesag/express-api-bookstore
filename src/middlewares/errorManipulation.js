
import mongoose from "mongoose";

/* eslint-disable no-unused-vars */
function errorManipulation(erro, req, res, next) {
    if(erro instanceof mongoose.Error.CastError) {
        res.status(400).json({ message: "Incorrect data." });
    }else {
        res.status(500).json({ message: "Request has been failed." });
    }
}

export default errorManipulation;