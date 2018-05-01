import { lensPath, lensIndex, view, pipe, map } from "ramda";

// LENS PATHS

// Outer lenses
const blocksLens = lensPath(["_embedded", "viaplay:blocks"]);
const productsLens = lensPath(["_embedded", "viaplay:products"]);
const contentTitleLens = lensPath(["title"]);

// For each item lens
const itemTitleLens = lensPath(["content", "series", "title"]);
const itemProductionYearLens = lensPath(["content", "production", "year"]);
const itemIMDBUrlLens = lensPath(["content", "imdb", "url"]);
const bgImageLens = lensPath(["content", "images", "boxart", "template"]);

export const contentFiltered = pipe(
  view(blocksLens),
  view(lensIndex(0, blocksLens)),
  block => ({
    contentTitle: view(contentTitleLens, block),
    content: map(
      item => ({
        title: view(itemTitleLens, item),
        productionYear: view(itemProductionYearLens, item),
        imdbUrl: view(itemIMDBUrlLens, item),
        bgImage: view(bgImageLens, item).replace(
          /{.*}/,
          "?width=500&height=500"
        )
      }),
      view(productsLens, block)
    )
  })
);
