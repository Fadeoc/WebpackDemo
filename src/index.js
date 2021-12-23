import addContent from "./add-content";
import "./css/index.less";
import Vue from 'Vue';

const app3 = new Vue()

console.log(app3)

const nameFromB = require('./commonB').nameB;
console.log('nameB in index: ', nameFromB);
addContent()
