import express from "express";
import dotenv from "dotenv";
import mainRouter from "./routes/index.routes.js";

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(express.json());

app.use("/", mainRouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});
