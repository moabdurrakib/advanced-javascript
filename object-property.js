const students = [
    {id: 12, name: "Noman"},
    {id: 54, name: "Najmul"},
    {id: 34, name: "Shahin"}
];
const names = students.map( s => s.name);
const bigger = students.filter(s => s.id > 25);
const biggerFind = students.find(s => s.id > 25);
console.log(biggerFind);