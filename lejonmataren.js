/** 
* Deklarera variabel antalMåltiderIdag som 0
* Deklarera variabel lampaPå som falskt
* Skapa funktion för mataLejonet:
    Om antalMåltiderIdag är mindre än 5:
        Visa ett meddelande "Nom nom nom! Lejonet är mätt."
        Öka antalMåltiderIdag med 1
    Annars:
        Visa ett meddelande "Lejonet har ätit för mycket idag!"
* Skapa funktion tändSläckLampa:
    Växla värdet på lampaPå (om den är sann, gör den falsk; om den är falsk, gör den sann)
    Om lampaPå är sann:
        Visa meddelandet "Lampan är tänd"
    Annars:
        Visa meddelandet "Lampan är släckt"
* Skapa funktion tömToalett:
    Skriv "swoosh" i konsolen
    Visa meddelandet "Toaletten är tömd!"
*/

let antalMåltiderIdag = 0;
        let lampaPå = false;

        function mataLejonet() {
            if (antalMåltiderIdag < 5) {
                alert("Nom nom nom! Lejonet är mätt.");
                antalMåltiderIdag++;
            } else {
                alert("Lejonet har ätit för mycket idag!");
            }
        }

        function tändSläckLampa() {
            lampaPå = !lampaPå;
            alert(lampaPå ? "Lampan är tänd" : "Lampan är släckt");
        }

        function tömToalett() {
            console.log("swoosh");
            alert("Toaletten är tömd!");
        }