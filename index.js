#!/usr/bin/env node


const boxen = require("boxen");
const chalk = require("chalk");

const terminalImage = require("terminal-image");

(async () => {
	console.log(await terminalImage.file('img/Steve_Urkel.jpg', {width: '45%', height:'45%'}));
})();

const data = {
  name: chalk.yellow("-----------Josué Ulliana-----------"),
  npm: chalk.cyan("https://www.npmjs.com/package/@josue-u"),
  github: chalk.cyan("https://github.com/Josue-U/npx-card"),
  linkTest: chalk.cyan("https://giphy.com/gifs/BxWTWalKTUAdq"),
};

const newLine = "\n";

console.log(
  chalk.green(
    boxen([`${data.name}`, `${data.npm}`, `${data.github}`, `${data.linkTest}`].join(newLine), {
      padding: 2,
      margin: 1,
      borderStyle: "round",
    }) 
  )
);
