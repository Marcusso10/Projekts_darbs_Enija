// let y = Math.floor(Math.random() * 10 + 1);
 
// let guess = 1;

// document.getElementById("submitguess").onclick = function () {


//     let x = document.getElementById("guessField").value;

//     if (x == y) {
//         alert("Malacis! Tu uzvarēji veicot "
//             + guess + " minējumus ");
//     }


//     else if (x > y) {
//         guess++;
//         alert("Nepareizi! Skaitlis ir mazāks.");
//     }
//     else {
//         guess++;
//         alert("Nepareizi! Skaitlis ir lielāks.")
//     }
// }




function calculateProteinIntake() {
    var mass = parseFloat(document.getElementById('mass').value);
    var age = parseInt(document.getElementById('age').value);
    

    let proteinIntake;
    if (age >= 18) {
       proteinIntake = mass * 1.4; 
    } else {
       proteinIntake = mass * 0.9; 
    }
    
    document.getElementById('result').innerText = "Nepieciešamais olbaltumvielu daudzums dienā: " + proteinIntake.toFixed(2) + " grami";
  }
