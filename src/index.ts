import express from "express";
import { bot } from "./bot";

const app = express();
app.use(express.json());
app.post("/bot1130656027:AAEMHLQARgC1XKfbqGSTpN4_GHpn6fZxO-U", (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

app.listen(process.env.PORT);
