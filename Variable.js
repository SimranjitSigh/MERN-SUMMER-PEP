// adding number using let 
let a=10;
let b=20;
let c=a+b;
console.log(c)


// to take input from user 
const r= require('readline');

const rl = r.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter first Number:',(a) => {
    rl.question('Enter Second Number: ',(b) =>{

        const sum=Number(a)+Number(b);
        console.log(`the sum of ${a} and ${b} is ${sum}`);
        rl.close();
    })
})