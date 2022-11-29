import express, { Request, Response } from "express";

const port = 2000;

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Rebuild final project</h1>");
});

app.get("/hi", (req: Request, res: Response) => {
  res.send("HIII!!!");
});

app.listen(port, () => {
  console.log("Listening in port", port);
});
