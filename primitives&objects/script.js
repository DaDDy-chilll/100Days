"use strict";

// const me = {
//   name: "hello world",
//   age: 30,
// };

// const myFriend = me;
// myFriend.age = 25; //! same change value
// console.log(me);
// console.log(myFriend);

// let firstName = "marry";
// let lastName = "brown";
// let oldLastName = lastName;
// lastName = "david";

// console.log(oldLastName);
// console.log(lastName);

const jsMgMg = {
  firstName: "JavaScript",
  lastName: "Mg Mg",
  languages: ["html", "css", "js", "node", "react"],
};
// const pythonMgMg = jsMgMg;
// pythonMgMg.firstName = "Python";
// console.log(jsMgMg);
// console.log(pythonMgMg);
console.log(jsMgMg);
const pythonMgMg = Object.assign({}, jsMgMg);
console.log(pythonMgMg);
pythonMgMg.firstName = "Python";
pythonMgMg.languages.push("Python");
console.log(pythonMgMg);
