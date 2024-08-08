let countElm = document.getElementById("count-el");
console.log(countElm);
let count = 0;

function increment() {
    count += 1;
    countElm.innerText = count; 
}
let SavingEl = document.getElementById("Saving-el");

function save (){
    
    //let Entries ="Previous Entries:";

    SavingEl.innerText +=  " "+count+ " - " 
    console.log(count)
    countElm.innerText = 0;
    count=0; 
}


let Name = "Shalak"
let greeting = "Hi, my name is "

let myGreeting =  greeting + Name

console.log(myGreeting)
let welcomeEL = document.getElementById("welcome-el");
welcomeEL.innerText = greeting + " " + Name;