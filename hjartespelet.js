// Funktion för att rätta svaren, räkna ut poäng och visa poäng
function rättaSvar() {
    // Rätt ord som ska jämföras med användarens svar
    const rättaSvar = {
        input1: "rövarstråt",
        input2: "kommer",
        input3: "stad och land",
        input4: "Kasper",
        input5: "Jesper",
        input6: "Jonatan"
    };

    // Poängräknare
    let poäng = 0;

    // Kontrollera varje svar
    for (let i = 1; i <= 6; i++) {
        const inputId = "input" + i;
        const användarSvar = document.getElementById(inputId).value.trim(); // Tar bort mellanslag i början/slutet
        
        if (användarSvar === rättaSvar[inputId]) {
            poäng++;
        }
    }

    // Visa resultat
    document.getElementById("resultat").innerText = "Bra jobbar, du fick " + poäng + " poäng!";
}

// Funktion för att rensa alla inputfält samt nollställa poängen
function spelaIgen() {
    // Rensar varje inputfält
    for (let i = 1; i <= 6; i++) {
        const inputId = "input" + i;
        document.getElementById(inputId).value = "";
    }

    // Nollställer poängen
    document.getElementById("resultat").innerText = "Poäng: 0";
}