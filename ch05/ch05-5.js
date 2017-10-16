"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const $ = require("jquery");
const io_1 = require("../model/my-monads/io");
const htmlDoc = $(`<div id="student-name">alonzo church</div>`)[0];
//"<div id="student-name">alonzo church</div>";
const read = (document, id) => () => document.getElementById(`\#${id}`).innerHTML;
const write = (document, id) => (value) => document.getElementById(`\#${id}`).innerHTML = value;
const readDom = _.partial(read, htmlDoc);
const writeDom = _.partial(write, htmlDoc);
const changeToStartCase = io_1.IO.from(readDom("student-name")).map(_.startCase).map(writeDom("student-name"));
const result = changeToStartCase.run();
//# sourceMappingURL=ch05-5.js.map