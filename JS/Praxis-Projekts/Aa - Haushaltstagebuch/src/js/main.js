"use strict";

const haushaltsbuch = {
  gesamtbilanz: new Map(),

  eintraege: [],

  eintrag_erfassen() {
    let neuer_eintrag = new Map();
    neuer_eintrag.set("titel", prompt("Titel:").trim());
    neuer_eintrag.set("typ", prompt("Typ (Einnahme oder Ausgabe):").trim());
    neuer_eintrag.set(
      "betrag",
      this.betrag_verarbeiten(prompt("Betrag (in Euro z.b: 33,40):"))
    );
    neuer_eintrag.set(
      "datum",
      this.datum_verarbeiten(prompt("Datum (jjjj-mm-tt):"))
    );
    neuer_eintrag.set("timestamp", Date.now());
    this.eintraege.push(neuer_eintrag);
  },

  betrag_verarbeiten(betrag) {
    betrag = betrag.trim();
    if (this.betrag_validieren(betrag)) {
      return parseFloat(betrag.replace(",", ".")) * 100;
    } else {
      console.log(`betrag entspricht nicht der Richtlinie: ${betrag} €`);
      return false;
    }
  },

  betrag_validieren(betrag) {
    if (betrag.match(/^\d+(?:(?:,|\.)\d\d?)?$/) !== null) {
      return true;
    } else {
      return false;
    }
  },

  titel_verarbeiten(titel) {
    if (this.titel_validieren(titel)) {
      return parseString(titel.replace(",", "."));
    } else {
      console.log(`betrag entspricht nicht der Richtlinie: ${betrag} €`);
      return false;
    }
  },

  titel_validieren(titel) {
    if (titel.match(/^\d+(?:(?:,|\.)\d\d?)?$/) !== null) {
      return true;
    } else {
      return false;
    }
  },

  datum_verarbeiten(datum) {
    datum = datum.trim();
    if (this.datum_validieren(datum)) {
      return new Date(`${datum} 00:00:00`);
    } else {
      console.log(`Datum entspricht nicht der Richtlinie: ${datum}`);
      return false;
    }
  },

  datum_validieren(datum) {
    if (datum.match(/^\d{4}-\d{2}-\d{2}$/) !== null) {
      return true;
    } else {
      return false;
    }
  },

  eintraege_sortieren() {
    this.eintraege.sort(function (eintrag_a, eintrag_b) {
      if (eintrag_a.get("datum") > eintrag_b.get("datum")) {
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
    this.eintraege.forEach(function (eintrag) {
      console.log(
        `Titel: ${eintrag.get("titel")}\n` +
          `Typ: ${eintrag.get("typ")}\n` +
          `Betrag: ${(eintrag.get("betrag") / 100).toFixed(2)} €\n` +
          `Datum: ${eintrag.get("datum").toLocaleString("de-DE", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}`
      );
    });
  },

  gesamtbilanz_erstellen() {
    let neue_gesamtbilanz = new Map();
    neue_gesamtbilanz.set("einnahmen", 0);
    neue_gesamtbilanz.set("ausgaben", 0);
    neue_gesamtbilanz.set("bilanz", 0);
    this.eintraege.forEach(function (eintrag) {
      switch (eintrag.get("typ")) {
        case "Einnahme":
        case "einnahme":
        case "+":
          neue_gesamtbilanz.set(
            "einnahmen",
            neue_gesamtbilanz.get("einnahmen") + eintrag.get("betrag")
          );
          neue_gesamtbilanz.set(
            "bilanz",
            neue_gesamtbilanz.get("bilanz") + eintrag.get("betrag")
          );
          break;
        case "Ausgabe":
        case "ausgabe":
        case "-":
          neue_gesamtbilanz.set(
            "ausgaben",
            neue_gesamtbilanz.get("ausgaben") + eintrag.get("betrag")
          );
          neue_gesamtbilanz.set(
            "bilanz",
            neue_gesamtbilanz.get("bilanz") - eintrag.get("betrag")
          );
          break;
        default:
          console.log(`Ich kenne "${eintrag.get("typ")}" nicht. Was ist das?`);
          alert(
            `Falsche Eingabe, achte auf den Input den ${eintrag.get("typ")}`
          );
          break;
      }
    });
    this.gesamtbilanz = neue_gesamtbilanz;
  },

  gesamtbilanz_ausgeben() {
    console.log(
      `Einnahmen: ${(this.gesamtbilanz.get("einnahmen") / 100).toFixed(
        2
      )} €\n` +
        `Ausgaben: ${(this.gesamtbilanz.get("ausgaben") / 100).toFixed(
          2
        )} €\n` +
        `Bilanz: ${(this.gesamtbilanz.get("bilanz") / 100).toFixed(2)} €\n` +
        `Bilanz ist positiv: ${this.gesamtbilanz.get("bilanz") / 100 >= 0}`
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
