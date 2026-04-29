function WrapinArray<T>(item:T):T[]{     //we made a generic fn which returns a array of datatype that is passed via items
    return [item]
}
console.log(WrapinArray("Red-velvet Blast"));
console.log(WrapinArray(23));
console.log(WrapinArray({Flavour:"Cheesy-spicy"}));

function pair<A,B>(a:A,b:B):[A,B]{
    return[a,b]
}
const f1 = pair("Jayesh",23)
const f2 = pair(6,7)
console.log(f1);
console.log(f2);

//generic interfaces
interface Box<T>{
    content:T
}
const numberBox:Box<number> = {content:10}
const StringBox:Box<string> = {content:"Guvava"}
//omit,pick partial is available 
//form states ,api response 

interface ApiPromise<T>{
    status:number,
    data:T
}
const res:ApiPromise<{flavour:string}> = {
    status:200,
    data:{flavour:"Kesar-kulfi"}
}