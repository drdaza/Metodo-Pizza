const flour = "400g harina";
const water = "300ml agua";
const oil = "2 cucharadas aceite"
const yeast = "15ml levadura"; 
const sugar ="a litle sugar"
const salt = "a litle salt" 
const MassBasse= [flour, water, oil, yeast, sugar, salt]
let userRes;
const readLineSync = require('readline-sync');


let pizzaChickenWithMushrooms = ["salsa de tomate", "pollo", "champiñones", "queso mozzarela"];
let pizzaPeperoni =["salsa de tomate", "peperoni", "queso mozarella"];
let pizzaBacon = ["salsa de tomate","bacon", "atun", "queso mozarella"]

makePizza();

function makePizza(){
    let pizza=selectPizza();
    console.log(pizza);
    switch(pizza){
        case "1": 
            console.log("hola");
            AddIngredients(pizzaPeperoni);
            DeliverPizza();
            break;
        case "2":

            AddIngredients(pizzaChickenWithMushrooms);
            DeliverPizza();
            break; 
        case "3":

            AddIngredients(pizzaBacon);
            DeliverPizza();
            break;
        default: 
            break;
    }
}

function selectPizza(){
    do{
        console.log("=====Pizza's menu=====");
        console.log("1. Peperoni's pizza");
        console.log("2. Chicken with mushrooms");
        console.log("3. Bacon with tuna");
        userRes = readLineSync.question("Pick an option pizza: ");
    }while(userRes>=4 || userRes<0 || userRes=="");
    return userRes;
}
function PrepareMix(){
    for (let index = 0; index < MassBasse.length; index++) {
        console.log("added "+MassBasse[index]);  
    }
    return true;
}
function knead(){
    
    if(PrepareMix()==true){
        console.log("kneading the dough...\n")
    }
}
function AddIngredients(ingredients){
    knead();
    for (let index = 0; index < ingredients.length; index++) 
    {
        console.log("adding: "+ingredients[index]);
        
    }
}
function BakePizza(){

    console.log("bakking pizza for 10 minutes... \n");
    return true;
}
function DeliverPizza(){
    if(BakePizza()==true){
        console.log("Delivering Pizza :D Thanks.");
    }
}


