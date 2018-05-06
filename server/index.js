import express from "express";
import Loadable from "react-loadable";
import indexController from "./controllers/index";
const app = express();

const PORT = 5000;

app.use(indexController);

Loadable.preloadAll().then(() => {
  app.listen(process.env.PORT || PORT, error => {
    if (error) {
      return console.log("Något gick fel -->", error);
    }
    console.log("Lyssnar på port " + PORT);
  });
});
