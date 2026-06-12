// used to reduce array into single to a single value by applying a function each ellement of array . 


const student=[{
    "name:":"abc",
    "marks": 27,
    "course":"fullstack"
}, 
{
    "name:":"def",
    "marks":24,
    "course":"java"
},
{
    "name:":"ghi",
    "marks": 24,
    "course":"DSA"
}];
const updated=student.map((student)=>{
    const per=(student.marks/30)*100;
    student.percentag = per;
    return student;  
});
console.log(updated);

// )
// const arr =[10,20,30,40,50];
// const sum = student.reduce((accumalator,currentvalue)=>{
//     return accumalator+currentvalue.marks;
// },0); //sum of marks of all student
// console.log(sum);

const avg=student.reduce((accumalator,currentvalue)=>{
    
    return accumalator+currentvalue.marks/3;
},0);
console.log(avg);
    
