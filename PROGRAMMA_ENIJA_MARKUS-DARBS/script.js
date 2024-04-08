
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
