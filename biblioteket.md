
# Kamomilla Stads digitala utlåningsystem

## Beskriv ordningen du skulle utföra "kodningen" i: vad (för funktioner, variabler, osv.) gör du först, därefter, … och sist?
    1. HTML: Skapa grundstrukturen med formulär, listor och knappar
        - Skapa ett HTML-formulär med fält för användarnamn och lösenord.
        - Skapa en lista över tillgängliga böcker.
        - Skapa ett formulär för att låna en bok.
        - Skapa ett formulär för att söka efter böcker.
        - Skapa ett område för att visa detaljer om en lånad bok.

    2. CSS: Styla sidan för ett snyggt utseende
        - Sidan ska fungerar bra på olika skärmstorlekar genom responsiv design.

    3. JavaScript: Hantera interaktionen mellan användaren och sidan, uppdatera databasen och visa information
        - Skapa en array för att lagra data kring böckerna (titel, författare, tillgänglighet, låntagare).
        - Skapa en funktion som tar emot bokdata och renderar en HTML-lista med böckerna. 
        - Skapa RegEx för att validera och kontrollera att användarnamnet och lösenordet har angetts och att de har rätt format. 
        - Sök efter användaren i localStorage. Om användaren finns och lösenordet stämmer, så är inloggningen lyckad. Om inte ska det komma upp en tydlig ruta att inloggningen misslyckades.
        - Om det är en ny användare, spara användarnamnet i en variabel som representerar den inloggade användaren. 
        - Skapa en funktion för att låna och returnera böcker. Denna ska även uppdatera bokdata och sparar ändringarna i localStorage. Ett felmeddelande ska visas om användaren försöker låna en bok som redan är utlånad.


## Vilken information behöver du, och hur lagrar du den?

#### Information jag behöver: 
    1. Vilka olika typer av avändare ska sidan stödja? T.ex. Biblotikarier, kund etc. 
    2. Vilka böcker finns tillgängliga? T.ex. ISBN, titel, författare etc.
    3. Hur ska utlåning hanteras? T.ex påminnelser, reservationsmöjligheter etc.
    4. Vilka säkerhetskrav finns? T.ex. dataskyddsförordningen. 
    5. Vilka olika språk ska sidan hantera?

#### Hur jag lagrar data:
    I min prototyp använder jag localStorage men när sidan ska gå live behövs en annan mer säker databas.  


## Skriv pseudokod för utlåning och återlämning av en bok av en användare.

#### Datastruktur för en bok: 
    /*
    *   Skapa datastruktur för en bok med hjälp av en array där varje objekt har följande egenskaper:
        - id: Ett unikt identifieringsnummer för boken
        - titel: Titeln på boken
        - författare: Författaren till boken
        - tillgänglig: En boolesk flagga som indikerar om boken är tillgänglig eller utlånad
        - låntagare: Användar-ID för den som lånat boken (null om ingen har lånat den)
        - utlåningsdatum: Datumet då boken lånades ut
        - förfallodatum: Datumet då boken ska lämnas tillbaka
    */

#### Datastruktur för en användare: 
    /*    
    * Skapa datastruktur för användaren med hjälp av en array där varje objekt har följande egenskaper:
        - id: Ett unikt identifieringsnummer för användaren
        - namn: Användarens namn
        - lånade_böcker: En lista med ID:n för de böcker användaren har lånat
    */

#### Pseudokod för utlåning: 
    /*
    * Skapa en funktion borrow_book
        - Hämta boken med angivet bok_id
            OM boken är tillgänglig DÅ
            Sätt bokens tillgänglig-flagga till falskt
            Sätt bokens låntagare till användar_id
            Sätt bokens utlåningsdatum till dagens datum
            Beräkna och sätt bokens förfallodatum
            Lägg till bokens id i listan över lånade böcker för användaren
            Uppdatera databasen
            RETURNERA "Boken är nu utlånad"
        ANNARS
            RETURNERA "Boken är redan utlånad"
    */

#### Pseudokod för återlämning: 
    /*
    * Skapa en funktion returna_book
        - Hämta boken med angivet bok_id
            OM boken är utlånad DÅ
            Sätt bokens tillgänglig-flagga till sant
            Sätt bokens låntagare till null
            Ta bort bokens id från listan över lånade böcker för användaren
            Uppdatera databasen
            RETURNERA "Boken är nu returnerad"
        ANNARS
            RETURNERA "Boken är redan tillgänglig"
    */
