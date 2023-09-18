import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoutes.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (request, response) => {
	console.log(request);
	return response.status(234).send("Welcome to MERN Stack");
});

app.use("/books", booksRoute);

mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => {
		console.log("App connected to database");
		app.listen(PORT, () => {
			console.log(`App is listening on ${process.env.PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
