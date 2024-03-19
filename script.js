let poguSkaits = document.querySelectorAll(".drum").length

//uztver peles spiešanu
for (let i=0; i<poguSkaits; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",bungas)
}

//uztver taustiņu spiešanu
document.addEventListener("keydown",function(notikums)
{spele(notikums.key);
animacija(notikums.key);
});




function bungas(){
    let poga = this.innerHTML;
    spele(poga)
    animacija(poga)
}


function animacija(pasreizejais){
    document.querySelector("."+ pasreizejais).classList.add("pressed");


    setTimeout(function() {
        document.querySelector("."+ pasreizejais).classList.remove("pressed");
    },100);
}




function spele(e){

switch (e){
    case "w":
    const tom1 = new Audio('./sounds/crash.mp3');
    tom1.play();
    break;

    case "a":
    const tom2 = new Audio('./sounds/kick-bass.mp3');
    tom2.play();
    break;

    case "s":
        const tom3 = new Audio('./sounds/snare.mp3');
        tom3.play();
        break;

     case "d":
         const tom4 = new Audio('./sounds/tom-1.mp3');
         tom4.play();
        break;

        case "j":
        const tom5 = new Audio('./sounds/tom-2.mp3');
        tom5.play();
        break;

        case "k":
            const tom6 = new Audio('./sounds/tom-3.mp3');
            tom6.play();
            break;
        
        case "l":
        const tom7 = new Audio('./sounds/tom-4.mp3');
        tom7.play();
        break;

}
}


function kalkulators(a,b){
    return a+b
}
console.log(kalkulators(3,42))

function zeizin(a,b){
    return a*b
}
console.log(zeizin(3,42))


//kkkkkkkkkkkkkkkkkkkk
function kings(a,b,operat){
    return operat(a,b)
}
console.log(kings(4,5,zeizin))