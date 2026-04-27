class Fish{
    color:string
    price:number

    constructor(color:string,price:number){
    this.color=color
    this.price=price
    console.log(this); //this points to new obj created                        
}
}
const angelfish = new Fish("Jet-Blac",200)
// angelfish.color ="Jet-Black"
console.log(angelfish.color);

class fishtype{
    public name="chiclid"

    private price:number=250
    reveal(){
        return this.price
    }
    protected origin:string ="SouthAmerica"//staff door entry

}
const f = new fishtype()
console.log(f.reveal())
class o extends fishtype{
    getOrigin(){
        return this.origin
    }
}
// new o().getOrigin()
//#balance = writing private balance

//readonly prop
class ShakeSize{
    readonly size:number=300
    constructor(size:number){
        this.size=size
    }
}
//getter-Setter we always use _ infront of private var
class momos{
    private _type ="steamed"
    //getter gets value setter sets
    get type (){
        return this._type
    }

    set type(type:string){
        if(type.trim()==="")throw new Error("Enter type"); //trim trims empty spaces
        this._type=type
    }
}
const m = new momos()
console.log(m.type="fried");
// console.log(m.type="");

class oneSnack{
    static shopname="snacktwist"
    constructor(public name:string){

    }
}
console.log(oneSnack.shopname);//static members are accesed through class name 

//Abstract classes|Abstract class = “half-built class” that forces children to complete it.
abstract class drink{
    abstract make():void
}
class myDrink extends drink{
    make(){
        console.log("brewing coffee");
        
    }
}
const md =new myDrink()
// console.log(md.make()); this returns both what happens inside fn and what it returns
md.make()

//composition of 2 classes 
class fries{
    make(){}
}
class cafe{
    constructor(private menu:fries){}

    order(){
         this.menu.make()
    }
}
//polymorphism 
abstract class Payment {
  abstract pay(): void;
}

class UPI extends Payment {
  pay() {
    console.log("Paid using UPI");
  }
}

class Card extends Payment {
  pay() {
    console.log("Paid using Card");
  }
}

function process(p: Payment) {
  p.pay(); // doesn't care which type
}
process(new UPI())
process(new Card())