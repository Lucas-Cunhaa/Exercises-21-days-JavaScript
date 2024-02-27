let studentsName = [];
let studensNotes = [];
let prossigue = '';
let totalNotes = 0;
let totalMedia = 0;
let counter = 0;

do{
    let persons = prompt(" Type Students's Name ");
    let notes = Number(prompt("Type the studens notes"));

    studentsName.push(persons);
    studensNotes.push(notes);

  prossigue = prompt(" Continue? Yes/No ");
}while( prossigue.toLowerCase() === "yes" )

for(p in studentsName){
    console.log(studentsName[p],"note", studensNotes[p]);
}
for( i in studentsName){
    counter++;
}
for(n of studensNotes){
    totalNotes += n;
}
totalMedia = totalNotes / counter

console.log(totalMedia)

