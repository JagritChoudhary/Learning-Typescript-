let response :any ="42";

let numericLength:number = (response as string).length

console.log(numericLength);


type book ={
    name:string,
    price:number
}
let bookString = '{"name":"Dog-Days","price":"500"}';
let bookObject = JSON.parse(bookString) as book
console.log(bookObject.name);
console.log(bookObject.price);


const inputElement = document.getElementById("username") as HTMLInputElement 

let value:any
value ="choco"
value =[1,2,3]
value=2.5
value.toUpperCase()

let newValue :unknown
newValue ="choco"
newValue=[2,4,6]
newValue = 4.5

if (typeof newValue ==="string") {
    newValue.toUpperCase();
}