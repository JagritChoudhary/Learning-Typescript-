//union
type Shakes ="kitkatOreo"|"RedvelvetBlast"|"Biscoff"; //literal types  
function OrderShake(s:Shakes) {
    console.log(s);
    
}
//intersection 
type chocolate ={amount:number}
type icecream = {flavour:string}

type Shakee = chocolate & icecream //must have both 

const ChocoShake :Shakee = {
    amount :2,
    flavour:"chocolate"

}

//optional values
type User={
    username:string,
    bio?:string
}
const U1:User ={username:"Jayesh"}
const U2:User ={username:"Jayeshh",bio:"Web3 dev"}

//readonly variable must assign value first time and then we cant change it further
type Config ={
    readonly appname:string 
    version:number
}
const cnf:Config={
    appname:"aquashop",
    version:1
}
// cnf.appname ="aquaa" shows error