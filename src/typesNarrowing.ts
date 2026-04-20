//narrowing down the data type because for the suggestion of functions for each data 
function getChoco(kind:string|number){
    if (typeof kind ==="string") {
        return `getting ${kind} choco ...` //this ensures the type is string
    }
    return `getting ${kind} of chocos...`//this ensures number

//type narrowing for truthy check 
function serveOrder(msg?:string){
    if (msg) {
        return `serving order of ${msg}`
    }
    return `serving red bubble waffle`
}
}

//exhaustive checks (Making sure all possible cases of a type are handled in your code)
function Orderchoco(size:'small'|'medium'|'large'|number){
    if (size ==="small") {
        return `one small choco`
    }
    if (size==='medium' ||"large") {
        return `extra choco`
    }
    return ` ${size} choco is ordered`
}

//class example //extra code safety when methods collide.
class RedVelvetBlast{
     shake(){
        return `red velvet blast shake `
    }
}
class OreoKitkat{
     shake(){
        return `red OreoKitkat shake `
    }
}
function shake(icecream:OreoKitkat|RedVelvetBlast){
    if (icecream  instanceof RedVelvetBlast) {
        return icecream.shake();
    }
   
}
const frullato = new RedVelvetBlast
console.log(shake(frullato));


//Own custom types -  used to make ApiResponse handling types
type ChocoOrder = {
    type:string,
    sugar:number
}
function isChocoOrder(obj:any):obj is ChocoOrder{            //this ensures output is of type ChocoOrder
    return(
        typeof obj ==="object" &&
        obj !== null &&
        typeof obj.type ==="string" &&
        typeof obj.sugar ==="number"
    )
}

//now we pass item through isChocoOrder to ensure that it is of type ChocoOrder we have a check 
function servingChoco(item:ChocoOrder|string){
    if (isChocoOrder(item)) {
        return `Serving ${item.type} with ${item.sugar}`
    }
    return `serving custom chai ${item}`
}
//interesting case
type kitkatOreo ={type:"Kitkat",icecream:number}
type Redvelvet={type:"red-velvet",amount:number}
type Biscoff ={type:"Biscoff",addOn:number}

type ChocoShake = kitkatOreo|Redvelvet|Biscoff
  
//switch case is condition statement when a value is checked againts different cases

function makeChoco(order:ChocoShake){
    switch (order.type) {
        case "Kitkat":
            return `serving kitkat`
            break;
         case "Biscoff":
            return `serving Biscoff`
            break;
         case "red-velvet":
            return `serving Redvelvet`
            break;
       
    }
}
//if we want to give arg in our own made type we have to write it in same way it is defined in our own type like->
console.log(makeChoco({type:"Kitkat",icecream:2}));


function make(order:Redvelvet|kitkatOreo){
    if ("icecream" in order) {
        //
    }
}

//function StringArr(arr:unknown):arr is string[]{    }
    

