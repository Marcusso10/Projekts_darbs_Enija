document.addEventListener('DOMContentLoaded', function () {
    var showInputBtn = document.getElementById('showInputBtn');
    var infoText = document.getElementById('infoText');
    var inputContainer = document.getElementById('inputContainer');
    var confirmBtn = document.getElementById('confirmBtn');
    var massInput = document.getElementById('mass');
    var productInfo = document.getElementById('productInfo');
    var result = document.getElementById('result');
    var attemptCount = document.getElementById('attemptCount');
    var attempt = 0;
    var selectedFood, actualProtein;

    // Definē ēdienus un proteīnus
    const foods = {
        "Pienā": 3.0,
        "Vistas gaļā": 27.0,
        "Olā": 13.0,
        "Tofu": 8.0,
        "Lasī": 20.0,
        "Jogurtā": 10.0,
        "Cūkgaļa": 27.0,
        "Kalmārā":18.0,
        "Krabja gaļā":19.0

    };

    showInputBtn.addEventListener('click', function () {
        showInputBtn.style.display = 'none';
        infoText.style.display = 'none';
        inputContainer.style.display = 'block';

        // Randomizē ēdienu izvēli
        selectedFood = Object.keys(foods)[Math.floor(Math.random() * Object.keys(foods).length)];
        actualProtein = foods[selectedFood];

        productInfo.textContent = `Spēle ir sākusies, centies uzvarēt spēli ar pēc iespējas mazāk mēģinājumiem. Jums vaig uzminēt proteīna daudzumu ${selectedFood} uz 100g.`;
    });

    confirmBtn.addEventListener('click', function () {
        var guess = parseFloat(massInput.value);

        if (!isNaN(guess)) {
            attempt++;

            // Pārbauda vai ir +-2gramu zonā
            if (guess >= actualProtein - 2 && guess <= actualProtein + 2) {
                alert("Apsveicu! Jūs esat uzvarējis!");
                result.textContent = `Jūs uzminējāt ${attempt} reizēs. Proteīna daudzums ${selectedFood} ir  ${actualProtein}g uz 100g.`;

                // Taimeris kurš restartējas pēc uzvarēšanas
                setTimeout(resetGame, 6000);
            } else {
                alert("Nepareizs minējums. Mēģini velreiz.");// Nepareizais minējums parādās
                massInput.value = ""; 
            }
        } else {
            alert("Lūdzu iesniedziet īstu ciparu.");//Ja nēsi iesniedzis ciparu vai vispār neko
        }
    });

    function resetGame() {
        // reižu sk
        attempt = 0;

        // iepreikšejo rez noņemšan
        result.textContent = "";
        massInput.value = "";

        // restartē spēli
        showInputBtn.style.display = 'block';
        infoText.style.display = 'block';
        inputContainer.style.display = 'none';
    }
});


const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${day}-${month}-${year}`;
document.querySelector('.current-date').innerHTML = currentDate;
 