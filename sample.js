console.log("Starting")
//assignment operator
let x=20
var y=150
const z=40

//Arithmetic operators

console.log("add: ",x+y)
console.log("sub: ",x-y)
console.log("mul: ",x*y)
console.log("div: ",x/y)
console.log("mod: ",y%x)

//Comparison operators

console.log("greater then: ",x>y)
console.log("less then: ",x<y)
console.log("gr eq: ",x>=y)
console.log(x<=y)
console.log(x==y)
console.log(x!=y)
console.log(x===y)
console.log(x!==y)

//logical operator

if(x>10 && y>10 || x<10 ){
    console.log("true");
}

//binary operator

console.log(x>>1)   
console.log(x<<1)
console.log(x|y)
console.log(x&y)
console.log(x^y)

//ternary operator
console.log(x%2==0?"even : ":"odd")

//condition statement

if(x%2==0){
    console.log("x is even");
}
else{
    console.log("x is odd");
}

//loop condition

for(let i=0;i<10;i++){
    console.log(i);
}
// arrays

arr=[10,20,30,40,50]
for(i in arr){
    console.log(arr[i]);
}

for(i of arr){
    console.log(i);
}

// objects 
ob={
    Num:10,
    Str:"Hello",
    Bol:true
}
ob["const"]=""
console.log(ob.Num)