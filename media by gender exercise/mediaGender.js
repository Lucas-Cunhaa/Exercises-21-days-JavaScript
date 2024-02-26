let notes = [];
let gender = [];
let question;
let sum = 0;
let media = 0;
let totalMen = 0;
let sumMen = 0;
let mediaMen = 0;
let totalWoman = 0;
let sumWoman = 0;
let mediaWoman = 0;
let sevenWoman = 0;
let sevenMan = 0;
let max = 0;

do {
  gender.push(prompt("Gender"));
  notes.push(Number(prompt("Note")));
  question = Number(prompt(" Another Note  " + " \n1 - Yes ; \n2 No "));
} while (question === 1);

for (let n of notes) {
  sum = n + sum;
  media = sum / notes.length;
};

for (let i = 0; i < gender.length; i++) {
  if (gender[i].toLowerCase() === "female") {
    totalWoman++;
    sumWoman += notes[i];
    if(notes[i] >= 7){sevenWoman++}};
};
if(totalWoman > 0 ) {
    mediaWoman = sumWoman / totalWoman;
}

for (let i = 0; i < gender.length; i++) {
  if (gender[i].toLowerCase() === "male") {
    totalMen++;
    sumMen += notes[i];
    max = Math.max(...notes)
    if(notes[i] >= 7){sevenMan++}};
};

if (totalMen > 0) {
  mediaMen = sumMen / totalMen;
};

console.log("Total Men: " + totalMen);
console.log("Sum of Men's Notes: " + sumMen);
console.log("Average of Men's Notes: " + mediaMen);
console.log("Total of Men's grades above 7 " + sevenMan);
console.log("Total Woman: " + totalWoman);
console.log("Sum of Woman's Notes: " + sumWoman);
console.log("Average of Woman's Notes: " + mediaWoman);
console.log("Total of Woman's grades above 7  " + sevenWoman);
console.log("Total Average " + media);

