import express, { Express, Request, Response } from "express";
import cors from "cors";
import taskRoutes from "./routes/task.routes";

const app: Express = express();
const port: number = 4000;

app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);

app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
