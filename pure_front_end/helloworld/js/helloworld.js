/**
 lint
 - Noun
 (usually uncountable, plural lints)

 1. a fine material made by scraping cotton or linen cloth; used for dressing wounds
 2. clinging fuzzy fluff that clings to fabric or accumulates in one's pockets or navel etc.
 3. the fibrous coat of thick hairs covering the seeds of the cotton plant
 4. raw cotton ready for baling

 - Verb
 (third-person singular simple present lints, present participle linting, simple past and past participle linted)

 1. (transitive, computing) To perform a static check on (source code) to detect stylistic or programmatic errors.
 e.g.: You should lint your JavaScript code before committing it.
 * @type {string}
 */


const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};
console.log(obj);

const anArray = ['one', 'seven', 'hi'];
let destArray = [];
for (const ele of anArray) {
  destArray.push({ name: ele, value: `${ele}-777` });
}

destArray = anArray.map(ele => ({ name: ele, value: `${ele}-777` }));

// /////////////
const anObject = {
  hasOwnProperty() {
    return 'heihei...';
  },
};
const anotherObject = { key: '777' };

console.log(anObject.hasOwnProperty('key'));
console.log(anotherObject.hasOwnProperty('key'));

const anotherObj = new Object();
const items = new Array();