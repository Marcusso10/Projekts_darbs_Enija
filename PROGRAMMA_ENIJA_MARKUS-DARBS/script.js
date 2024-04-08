const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${day}-${month}-${year}`;
document.querySelector('.current-date').innerHTML = currentDate;
 
 
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
