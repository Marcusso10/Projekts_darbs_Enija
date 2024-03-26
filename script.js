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
  
  // Calculate protein intake based on mass and age
  var proteinIntake = mass * 0.8; // Recommended protein intake per kg of body weight
  if (age >= 30) {
      proteinIntake += 5; // Additional protein intake for adults over 30
  }
  
  document.getElementById('result').innerText = "Protein intake needed per day: " + proteinIntake.toFixed(2) + " grams";
}