// array map function
// var arr=[2,3,4,5,6];
// var newArray=arr.map((num)=>{

// return num*2;
// });

// console.log(newArray);


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
console.log(updated

)
const arr =[10,20,30,40,50];
const sum = student.reduce((accumalator,currentvalue)=>{
    return accumalator+currentvalue.marks;
},0); //sum of marks of all student


// when we want to cimbine all arrays value into single value
// const arr =[10,20,30,40,50];
// const sum = arr.reduce((accumalator,currentvalue)=>{
//     return accumalator+currentvalue;
// },0); // 0 is value of accumulator

console.log(sum);

const New = student.nfilter ((currentvalue)=>
{
    return currentvalue.cource=="java"
});
console.log(New)



const updatedStudent=student.map(s=>{
    const p=s.totalMarks/150*100;
    s.percentage=p;
    return;

});
console.log(updatedStudent)