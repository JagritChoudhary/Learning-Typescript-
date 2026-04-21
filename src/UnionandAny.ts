//Union

let subs :number|string = "1M"

let apiRequestcalls :"pending"|"success"|"error"="error"
apiRequestcalls = "success"

let airlineSeat :'aisle'|'middle'|'window'
airlineSeat = 'window'

//always avoid any type
const orders = ['23','45','55','90']

let currentOrder:string|undefined

for(let order of orders){
    if (order === '55') {
        currentOrder = order;
        break;
    }
    currentOrder = '23'
}
console.log(currentOrder);
