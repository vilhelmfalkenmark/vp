import express from "express";
import Loadable from "react-loadable";
import indexController from "./controllers/index";

const PORT = 5000;

const app = express();

app.use(indexController);

Loadable.preloadAll().then(() => {
  app.listen(PORT, error => {
    if (error) {
      return console.log("Något gick fel -->", error);
    }
    console.log(`Lyssnar på port ${PORT}`);
  });
});
