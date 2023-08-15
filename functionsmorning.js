// set a function to run when a number is divisible by 5 and 8

function divisibleByFiveAndEight (number) {
    if (number % 5 == 0 && number % 8 ==0) {
        console.log(number + " is divisible by 5 and 8"); 
    } else {console.log(number + " is not divisible by 5 or 8");
    }return number;
}

///
function countBy20 (value) {
    if (value % 20 == 0) {
        console.log(value + " is divisible by 20"); 
    } else: null;
    return value;
}
///
const drinkEnoughCoffee = (amountOfCups) => {
    if (amountOfCups >= 4) {
        return "wohoo, you reach the limit"
    } else {
        return "you need more coffee to function"
    }
}

console.log(drinkEnoughCoffee(2))

/////
const tempInCelsius =(fahrenheit)=>{
    let tempInCelsius = ((fahrenheit-32)/1.8)
    console.log(tempInCelsius + "°")
}
tempInCelsius(89)


/////
const greetCustomer = (name) => {
    return ("Welcome to the store " + name);
 }
 console.log(greetCustomer("Mr Smith"))