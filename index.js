#!/usr/bin/env node
var sh = require('shelljs');
const fs= require("fs");
const eslintConfigs = require("./.eslintrc");
fs.writeFile(".eslintrc",eslintConfigs,(err,res)=>{
 if(err){
   throw(err)
 }
 console.log("eslint files copied")
})
if (sh.exec("yarn add eslint eslint-plugin-react eslint-plugin-import eslint-import-resolver-webpack eslint-config-airbnb eslint-plugin-prettier eslint-config-prettier eslint-plugin-jsx-a11y -D").code !== 0) {
  sh.echo('wow done');
 } 
