function frageName() {
    var name = prompt("Bitte geben Sie Ihren Namen ein:");
    if (name != null && name !== "") {
      alert("Hallo, " + name + "! Willkommen auf meiner Website.");
    } else {
      alert("Ungültige Eingabe. Bitte geben Sie Ihren Namen ein.");
    }
  }
  