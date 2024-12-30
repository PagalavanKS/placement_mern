// console.log("Starting")
// //assignment operator
// let x=20
// var y=150
// const z=40

// //Arithmetic operators

// console.log("add: ",x+y)
// console.log("sub: ",x-y)
// console.log("mul: ",x*y)
// console.log("div: ",x/y)
// console.log("mod: ",y%x)

// //Comparison operators

// console.log("greater then: ",x>y)
// console.log("less then: ",x<y)
// console.log("gr eq: ",x>=y)
// console.log(x<=y)
// console.log(x==y)
// console.log(x!=y)
// console.log(x===y)
// console.log(x!==y)

// //logical operator

// if(x>10 && y>10 || x<10 ){
//     console.log("true");
// }

// //binary operator

// console.log(x>>1)   
// console.log(x<<1)
// console.log(x|y)
// console.log(x&y)
// console.log(x^y)

// //ternary operator
// console.log(x%2==0?"even : ":"odd")

// //condition statement

// if(x%2==0){
//     console.log("x is even");
// }
// else{
//     console.log("x is odd");
// }

// //loop condition

// for(let i=0;i<10;i++){
//     console.log(i);
// }
// // arrays

// arr=[10,20,30,40,50]
// for(i in arr){
//     console.log(arr[i]);
// }

// for(i of arr){
//     console.log(i);
// }

// // objects 
// ob={
//     Num:10,
//     Str:"Hello",
//     Bol:true
// }
// ob["const"]=""
// console.log(ob.Num)


//functions
// function lear(ac)
// {
//     console.log("Hello",ac);
// }
// lear("World");


//arrow functions
// const lear=(hi)=>{console.log("Hello",hi)};
//     lear("World");


//ternary operators
// let a=10
// console.log(a%2==0?"Even":"odd")


//destructure
// var some=[10,12,15,17];
// var [a,b,c,d]=some
// console.log(b)

//spread operator
// firlist=["a","b","c","d"]
// seclsit=["e","f"]
// comlis=[...firlist,...seclsit]
// console.log(comlis)


// //rest operator



// function rest(...args)
// {
//     console.log(args);
// }
// rest(1,2,3,4,5)

// let obj={
//     name:"John",
//     age:30,
//     city:"USA"
// }
// for(var key in obj){
//     console.log(key);
//     Array.push(key);
// }
// console.log()
// Array.forEach(element => {
//     console.log(obj[key]);
// })



// //await and async function
// async function funname()
// {
//     setTimeout(() =>{
//         console.log("hii!!")

//     },2000);
//     console.log(await "hello")
// }
// ar=async() => {
//     setTimeout(() =>{
//         console.log("KECs'")

//     },2000);
//    console.log(await "Logesh")
// }
// funname()
// ar()


//then
me=async() =>{
    setTimeout(() => {
        console.log("Love")
    },2000);
    return "no one"
}

me().then((a) => {
    console.log(a)
})
