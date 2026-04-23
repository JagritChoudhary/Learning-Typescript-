type ChocoShake={
    type:string,
    sugar:number,
    icecreame:boolean
}

function ShakeOrder(order:ChocoShake) {
    console.log(order);
    
}
function serveOrder(order:ChocoShake) {
    console.log(order);
    
}

type ShakeRecipe={
    milk:number,
    chocolate:number
}

class KitkatOreo implements ShakeRecipe{
    milk =100;
    chocolate =50
}

interface Shakesize{
    size:"small"|"medium"|"large"
}
class shak implements Shakesize{
    size: "small" | "medium" | "large" = "medium";
}

