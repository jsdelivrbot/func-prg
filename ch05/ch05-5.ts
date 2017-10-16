import * as _ from "lodash";
import * as R from "ramda";
import * as $ from "jquery";
import { IO } from "../model/my-monads/io";

const htmlDoc = $(`<div id="student-name">alonzo church</div>`)[0];
 //"<div id="student-name">alonzo church</div>";

const read = (document: HTMLDocument, id: string) => () => document.getElementById(`\#${id}`).innerHTML;
const write = (document: HTMLDocument, id: string) => (value: string) => document.getElementById(`\#${id}`).innerHTML = value;
const readDom = _.partial(read, htmlDoc);
const writeDom = _.partial(write, htmlDoc);

const changeToStartCase = IO.from(readDom("student-name")).map(_.startCase).map(writeDom("student-name"));

const result = changeToStartCase.run();