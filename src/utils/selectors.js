import { lensPath, lensIndex, view, pipe, map } from "ramda";

// Outer lenses
const blocksLens = lensPath(["_embedded", "viaplay:blocks"]);
const productsLens = lensPath(["_embedded", "viaplay:products"]);
const contentTitleLens = lensPath(["title"]);

// For each item lens
const itemTitleLens = lensPath(["content", "series", "title"]);
const itemProductionYearLens = lensPath(["content", "production", "year"]);
const itemImdbUrlLens = lensPath(["content", "imdb", "url"]);
const bgImageLens = lensPath(["content", "images", "landscape", "template"]);

export const contentFiltered = pipe(
  view(blocksLens),
  view(lensIndex(0, blocksLens)),
  block => ({
    contentTitle: view(contentTitleLens, block),
    content: map(
      item => ({
        title: view(itemTitleLens, item),
        productionYear: view(itemProductionYearLens, item),
        imdbUrl: view(itemImdbUrlLens, item),
        imageUrl: view(bgImageLens, item).replace(
          /{.*}/,
          "?width=500&height=280" // 1.78 / 0.5625 inverted aspect ratio
        )
      }),
      view(productsLens, block)
    )
  })
);

export default contentFiltered;
