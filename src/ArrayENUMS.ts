//whenever we use optional feild we should keep it optional ya toh write a simple if condition like if(!user.wallet) return null 
//var doesnt care {} body of fn and can be accessed anywhere but consts and let is safe within body of fn 
//loop runs and setTimeout(() => {}, timeout); fn jo hai will schedule output for later and take final value of variable in let or const values will be different at a time
//let me value and ref of variable can be changed but const pointing to an obj can never be changed just internal value of obj can be changed :)
//SDK internally calls external APIs and provides simple functions so developers don’t have to deal with raw HTTP requests  Frontend → Your Backend API(to securely handle sdk responses and private info) → SDK/API → External Service
//async arrowfn and normal me difference 
// const obj = {
//   value: 10,
//   fn: async () => {
//     console.log(this.value);
//   }
// };

// obj.fn(); // ❌ undefined (this is NOT obj) but in normal async fn we can use this context


const ShakeFalvours:string[]=["ChocoKitkat","Red-VelvetBlast"]
const chocoPrice :number[]=[160,170]
const rating:Array<number> =[4.6,5.0]

//array of obj 
type Fish={
    name:string
    Color:string
}
const southAmerican:Fish[]=[
    {name:"AngelFish",Color:"Jet-black"},
    {  name:"Chiclids",Color:"Blue-red"}
]
//readonly Array,cant modify only define 
const cites:readonly string[]=["Mumbai","Raipur"]
// cites.push("bhilai")

//Multidimention array
const table:number[][]=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

//tuples
let fishTuple:[string,number]
fishTuple=["loach",30] //cant change order 
fishTuple=["apistogamma",40] 
console.log(fishTuple);//print latest as pass by reference

//optional
let Userinfo:[string,number,boolean?]
Userinfo=["jayesh",23,true]

const location:readonly[number,number] =[34.06,88.4]  

//named tuple
const fihhName:[name:string,size:number]=["arowana",4]

//enums-restrict choices in software 
enum Shakesize{
    SMALL,
    MEDIUM,
    LARGE
}
const S1=Shakesize.LARGE

//auto incremental property
enum Status{
    PENDING=100,
    SERVED,//101
    CANCELLED//102
}
//Environment variables are named values stored outside your code that your program can read at runtime.
enum fishtype{
    SHRIMP="shrimp",
    OTTOCINCLOUS="ottocinclous"

}
function orderFih(type:fishtype){
    console.log(type);
    
}
orderFih(fishtype.OTTOCINCLOUS)
// orderFih("shrimp") error

//prefer one data type for one enum We cannot reassign a const variable(change structure of it or change exact value like x=10 ko x=20 ni kar sakte ), but we can modify its internal data (if it’s an object or array,enums)
const enum sugar{
    LOW =1,
    MEDIUM=2,
    HIGH=3
}
const s =sugar.LOW

