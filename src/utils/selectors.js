import { lensPath, lensIndex, view, pipe } from "ramda";

// LENS PATHS
const blocksLens = lensPath(["_embedded", "viaplay:blocks"]);
const titleLens = lensPath(["title"]);

export const moviesFiltered = pipe(
  view(blocksLens),
  view(lensIndex(0, blocksLens)),
  block => ({
    title: view(titleLens, block)
    // content
  })
);
