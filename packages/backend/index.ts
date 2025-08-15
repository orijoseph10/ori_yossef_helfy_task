import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
const port: number = 4000;

app.use(cors());
app.use(express.json());

app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
