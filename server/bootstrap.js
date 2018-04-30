// require("module-alias/register");

require("ignore-styles");
require("babel-register")({
  ignore: [/(node_modules)/],
  presets: ["es2015", "react-app"],
  plugins: [
    [
      "css-modules-transform",
      {
        generateScopedName: "[name]__[local]___[hash:base64:4]",
        extensions: [".css"]
      }
    ]
  ]
});

require("./index");
