//const is always used to prevent accedential reassigning , const keeps memory reference
const fish={
    name:"Neon-tetra",
    size:"small",
    isAvailable:true
}
//ts behind the scene always infer , for inference we use ':'
let goldfish:{
    name:string
    size:string
    isAvialable:boolean
}

goldfish={
    name:"Shubunkin",
    size:"small",
    isAvialable:true
}
//aliased obj 
type Cardinal ={
    name:string
    color:string
    sizes:string[]  //thats how we declare string arr
}
const neon:Cardinal={
    name:"neon-tetra",
    color:"blue-red",
    sizes:["small","medium"]
}
//duckTyping , if it walks like a duck looks like a duck , it is a duck
type Fishfood={
    size:string
}
let babyfishFood:Fishfood={
    size:"small-pellets"
}
let bigFishfood={size:"large" ,insectNutrients:true}
babyfishFood = bigFishfood //satisfied bare minimum
//sometimes we want to have issues 
type Fishgrowth ={
    growthTime:number
}
let black_tetra={
    growthTime:3,
    aggresive:false
}
let green_tetra:Fishgrowth = black_tetra

//always write code with clarity and seperate the data types
type item={name:string , quantity:number}
type address={street:string ,pin:number}

type Order={
    id:string,
    items:item[]
    address:address
}

//when we want to update values partially
type shakee={
    name:string,
    price:number,
    ice:boolean
}

const updateShake=(updates:Partial<shakee>)=>{
    console.log("updating shake with values ",updates);
    
}
updateShake({price:160})
//partial makes all the data types in type optional we can pass empty type also

//Required means all the properties are needed 
type ShakeOrder={
    name?:string,
    price?:number
}
const PlaceOrder = (order:Required<ShakeOrder>)=>{
    console.log(order);
    
}
PlaceOrder({
    name:"icecreeam",
    price:250
})
type Shakenew=Pick<shakee,"name"|"price">

const shake1:Shakenew ={
    name:"sweetDeath",
    price:300
}
//pick specially chooses the properties