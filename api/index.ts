import express from "express";
import path from "path";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const distPath = path.resolve(process.cwd(), "dist", "public");

app.use(express.static(distPath));

app.get("*", (_req, res) => {
  res.sendFile(path.resolve(distPath, "index.html"));
});

export default app;
