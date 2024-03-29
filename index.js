#!/usr/bin/env node
var sh = require("shelljs");
const fs = require("fs");
const path = require("path");
const eslintConfigs = fs.readFileSync(path.resolve(__dirname,'./',".eslintrc",));
fs.writeFile(".eslintrc",eslintConfigs, (err, res) => {
  if (err) {
    console.log(err, "error");
  }
  console.log("eslint files copied");
});

if (
  sh.exec(
    "yarn add eslint eslint-plugin-react eslint-plugin-import eslint-import-resolver-webpack eslint-config-airbnb eslint-plugin-prettier eslint-config-prettier eslint-plugin-jsx-a11y -D"
  ).code !== 0
) {
  sh.echo("wow done");
}
