import React from "react";
import { render } from "react-dom";
import "./styles/index.css";
// import { onInsertCssHandler } from "./layout/WithCss";
// import WithCssContext from "./layout/WithCssContext";
import Root from "./layout/Root";

// require("./styles/main.css");

// import registerServiceWorker from "./registerServiceWorker";

render(<Root />, document.getElementById("root"));

// registerServiceWorker();

// {
//   test: /\.css$/,
//   use: [
//     // require.resolve("classnames-loader"),
//     // require.resolve("isomorphic-style-loader"),
//     {
//       loader: require.resolve("css-loader"),
//       options: {
//         importLoaders: 1,
//         // CSS Modules https://github.com/css-modules/css-modules
//         modules: true,
//         localIdentName: true
//           ? "[name]_[local]_[hash:base64:3]"
//           : "[hash:base64:4]"
//       }
//     },
//     {
//       loader: require.resolve("postcss-loader"),
//       options: {
//         config: {
//           path: paths.postcssConfig
//         }
//       }
//     }
//   ]
// },
