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