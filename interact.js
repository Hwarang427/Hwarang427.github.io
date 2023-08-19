//create buttons
const buttonPlay = document.getElementById("buttonPlay");
const buttonFeed = document.getElementById("buttonFeed");
const buttonGiveWater =document.getElementById("buttonGiveWater");

//progress bars

const objectLvlPlay = document.getElementById("objectLvlPlay");
const objectLvlHunger = document.getElementById("objectLvlHunger");
const objectLvlThirst = document.getElementById("objectLvlThirst");
const wyrmBoxSingular= document.getElementById("petBoxSingular");

/*The following blocks create event listeners that ask the user how 
many pages they read, and uses that number to increase the Boredom, Thirst, and Hunger Values and
will not activate the buttons if the minimum pages are not met*/ 
buttonPlay.addEventListener("click", ()=>{
    let cost = prompt("How many pages did you read?");
    if (cost >=20){
        window.alert("Good Job!");
        objectLvlPlay.value+=20;
    }
    else {
        window.alert("Keep Reading!");
    }
    
})
buttonFeed.addEventListener("click", ()=>{
    let cost=prompt("How many pages did you read?");
    if(cost >=10){
        window.alert("Good Job!");
        objectLvlHunger.value+=10;
    }
    else{
        window.alert("Keep Reading!");
    }
   
})
buttonGiveWater.addEventListener("click", ()=>{
    let cost = prompt("How may pages did you read?");
    if(cost >= 10){
        window.alert("Good Job!");
        objectLvlThirst.value+=5;
    }
    else{
        window.alert("Keep Reading!")
    }
})

// Sets Stats to Max
objectLvlPlay.value = 100;
objectLvlHunger.value = 100;
objectLvlThirst.value = 100;


// Contols the Decrement, -1 every 6000 miliseconds for demo purpose
let play = setInterval(() =>{
    objectLvlPlay.value--;
}, 6000);

let thirst = setInterval(()=>{
    objectLvlThirst.value--;
}, 6000);

let hunger = setInterval(()=>{
    objectLvlHunger.value--;
}, 6000);

if (objectLvlPlay.value == 0 ){
    clearInterval(play);
}

if (objectLvlHunger.value == 0){
    clearInterval(hunger);
}

if (objectLvlThirst.value ==0 ){
    clearInterval(thirst);
}
