let a = document.getElementById("A");
let ash = document.getElementById("Ash");
let b = document.getElementById("B");
let c = document.getElementById("C");
let csh = document.getElementById("Csh");
let d = document.getElementById("D");
let dsh = document.getElementById("Dsh");
let e = document.getElementById("E");
let f = document.getElementById("F");
let fsh = document.getElementById("Fsh");
let g = document.getElementById("G");
let gsh = document.getElementById("Gsh");
let ans = document.getElementById("ans");
let play = document.getElementById("play");
let count = 0;
let files = [a, ash, b, c, csh, d, dsh, e, f, fsh, g, gsh];
ans.innerHTML = "Click here to get the answer";
play.innerHTML = "Click here to play a random note";
let answer = "";

//Function for playing the note
let playNote = function () {
  let num = Math.floor(Math.random() * 12);
  files[num].play();
  return files[num].id;
};

//Function for monitoring events
const runApp = (function () {
  play.addEventListener("click", () => {
    ans.innerHtml = "Click here to get the answer";
    answer = playNote();
  });
  ans.addEventListener("click", () => {
    ans.innerHTML = `Answer:${answer}`;
  });
})();
