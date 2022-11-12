const flour = "400g harina";
const water = "300ml agua";
const oil = "2 cucharadas aceite"
const yeast = "15ml levadura"; 
const sugar ="a litle sugar"
const salt = "a litle salt" 
const MassBasse= [flour, water, oil, yeast, sugar, salt]

const readLineSync = require('readline-sync')

let userRes;

userRes = readLineSync.question("Pick an option");
console.log(userRes);
    





let ingredient1= "salsa de tomate";
let ingredient2= "pollo";
let ingredient3= "champiñones";
let ingredient4= "queso mozzarela"
let ingredients = [ingredient1, ingredient2, ingredient3, ingredient4];

function PrepareMix(){
    for (let index = 0; index < MassBasse.length; index++) {
        console.log("added "+MassBasse[index]);  
    }
    return true;
}
function knead(){
    
    if(PrepareMix()==true){
        console.log("kneading the dough...")
    }
}
function AddIngredients(){
    for (let index = 0; index < ingredients.length; index++) 
    {
        console.log("adding: "+ingredients[index]);
        
    }
}
function BakePizza(){
    knead();
    AddIngredients();
    console.log("bakking pizza");
    return true;
}
function DeliverPizza(){
    if(BakePizza()==true){
        console.log("Delivering Pizza :D Thanks.");
    }
}


