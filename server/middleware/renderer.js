import React from "react";
import ReactDOMServer from "react-dom/server";
import Loadable from "react-loadable";
import { Provider } from "react-redux";

// import our main App component
import App from "../../src/Root";

const path = require("path");
const fs = require("fs");

export default store => (req, res, next) => {
  // get the html file created with the create-react-app build
  const filePath = path.resolve(__dirname, "..", "..", "build", "index.html");

  fs.readFile(filePath, "utf8", (err, htmlData) => {
    if (err) {
      console.error("err", err);
      return res.status(404).end();
    }

    const modules = [];

    // render the app as a string
    const html = ReactDOMServer.renderToString(
      <Loadable.Capture report={m => modules.push(m)}>
        <Provider store={store}>
          <App />
        </Provider>
      </Loadable.Capture>
    );

    // get the stringified state
    const reduxState = JSON.stringify(store.getState());

    // now inject the rendered app into our html and send it to the client
    return res.send(
      htmlData
        // write the React app
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
        // write the string version of our state
        .replace("__REDUX_STATE__={}", `__REDUX_STATE__=${reduxState}`)
      // append the extra js assets
    );
  });
};
