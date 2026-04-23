//interface makes a structure for data 
interface Shake{
    flavour:string,
    price:number,
    icecream?:boolean
}
const oreoShake:Shake={
    flavour:"oreo+sweet",
    price:180
}

interface Shopp{
    readonly id:number,
    name:string
}
const S:Shopp={id:101,name:"Shakes-cafe"}

//functionality defination 
interface discountCalculator{
    (price:number):number //strucure of fn 
}
const d:discountCalculator = (p) => p * 0.25 
console.log(d(7));

interface IcecreamMaker{
    start():void,
    stop():void
}
const icecreamShake:IcecreamMaker={
    start() {
        console.log("start");
        
    },
    stop() {
        console.log("stop");
        
    }
}



interface ShakeRating{
    [flavour:string]:number
}
const Ratings:ShakeRating={
    Oreokitkat:4.2   }
    
interface User{
    name:string
}
interface User{
    age:number
}
const u:User={
    name:"Jayesh",
    age:23
}
//we extend them, multiple inheritance
interface A{a:number}
interface B{b:number}
interface C extends A,B{}