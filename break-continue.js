const students = [12,34,-3, -43,48,87,85,37,44];

for (let i = 0; i < students.length; i++ ){
    if (students[i] < 3){
        break;
    }
    // console.log(students[i]);
}
for (let i = 0; i < students.length; i++ ){
    if (students[i] < 0){
        continue;
    }
    console.log(students[i]);
}
