"use strict";


const haushaltsbuch = {
    
    gesamtbilanz: new Map(),
    
    eintraege: [],

    eintrag_erfassen() {
        let neuer_eintrag = new Map();
        neuer_eintrag.set("titel", prompt("Titel:"));
        neuer_eintrag.set("typ", prompt("Typ (Einnahme oder Ausgabe):"));
        neuer_eintrag.set("betrag", parseInt(prompt("Betrag (in Cent):")));
        neuer_eintrag.set("datum", prompt("Datum (jjjj-mm-tt)"));
        this.eintraege.push(neuer_eintrag);
    },
    

    eintraege_sortieren() {
        this.eintraege.sort(function(eintrag_a, eintrag_b) {
            if (eintrag_a.get("datum") == eintrag_b.get("datum")) {
                return -1;
            } else if (eintrag_a.get("datum") < eintrag_b.get("datum")) {
                return 1;
            } else {
                return 0;
            }
        });
    },

    eintraege_ausgeben() {
        console.clear();
        this.eintraege.forEach(function(eintrag) {
            console.log(`Titel: ${eintrag.get("titel")}\n`
                + `Typ: ${eintrag.get("typ")}\n`
                + `Betrag: ${eintrag.get("betrag")} ct\n`
                + `Datum: ${eintrag.get("datum")}`
            );
        });
    },


    gesamtbilanz_erstellen() {
        let neue_gesamtbilanz = new Map();
        neue_gesamtbilanz.set("einnahmen", 0);
        neue_gesamtbilanz.set("ausgaben", 0);
        neue_gesamtbilanz.set("bilanz", 0);
        this.eintraege.forEach(function(eintrag){
            switch (eintrag.get("typ")) {
                case "Einnahme":
                case "einnahme":
                case "+":
                    neue_gesamtbilanz.set("einnahmen", neue_gesamtbilanz.get("einnahmen")+ eintrag.get("betrag"));
                    neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") + eintrag.get("betrag"));
                    break;
                case "Ausgabe":
                case "ausgabe":
                case "-":
                    neue_gesamtbilanz.set("ausgaben", neue_gesamtbilanz.get("ausgaben") + eintrag.get("betrag"));
                    neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") - eintrag.get("betrag"));
                    break;
                default:
                    console.log(`Ich kenne "${eintrag.get("typ")}" nicht. Was ist das?`)
                    alert(`Falsche Eingabe, achte auf den Input den ${eintrag.get("typ")}`);
                    break;
            }
        });
        this.gesamtbilanz = neue_gesamtbilanz;
    },



    gesamtbilanz_ausgeben() {
        console.log(`Einnahmen: ${this.gesamtbilanz.get("einnahmen")} ct\n`
            + `Ausgaben: ${this.gesamtbilanz.get("ausgaben")} ct\n`
            + `Bilanz: ${this.gesamtbilanz.get("bilanz")} ct\n`
            + `Bilanz ist positiv: ${this.gesamtbilanz.get("bilanz") >= 0}`
        );
    },

    eintrag_hinzufuegen() {
        let weiterer_eintrag = true;
        while (weiterer_eintrag) {
            this.eintrag_erfassen();
            this.eintraege_ausgeben();
            this.gesamtbilanz_erstellen();
            this.gesamtbilanz_ausgeben();
            weiterer_eintrag = confirm("Weiteren eintrag hinzufügen?");
        }
    },   
};

haushaltsbuch.eintrag_hinzufuegen();
console.log(haushaltsbuch);