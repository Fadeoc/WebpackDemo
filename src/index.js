import addContent from "./add-content";
import "./css/index.less";

const nameFromB = require('./commonB').nameB;
console.log('nameB in index: ', nameFromB);
addContent()

window.depTest.logEntry();
