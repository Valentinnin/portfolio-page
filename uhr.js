function getTimeInWords() {
    const now = new Date();

    const stunden = [
        'zwölfi', 'eis', 'zwei', 'drü', 'vieri', 
        'füfi', 'sächsi', 'sibni', 'achti', 'nüni', 'zäni', 'elfi'
    ];

    const minuten = [
        '', 'eis', 'zwöi', 'drü', 'vier', 
        'füf', 'sächs', 'sibä', 'acht', 'nün', 'zäh', 
        'elf', 'zwölf', 'drizäh', 'vierzäh', 'füfzäh',
        'sächzäh', 'sibzäh', 'achtzäh', 'nünzäh'
    ];

    let stunde = now.getHours() % 12;
    let minute = now.getMinutes();

    let output = "Es isch ";

    if (minute == 0) {
        output += stunden[stunde] + " Uur";
    } else if (minute <= 20) {
        output += minuten[minute] + " ab " + stunden[stunde];
    } else if (minute < 30) {
        output += "füf vor halbi " + stunden[(stunde + 1) % 12];
    } else if (minute == 30) {
        output += "halbi " + stunden[(stunde + 1) % 12];
    } else if (minute < 40) {
        output += "füf ab halbi " + stunden[(stunde + 1) % 12];
    } else {
        output += minuten[60 - minute] + " vor " + stunden[(stunde + 1) % 12];
    }

    document.getElementById("timeInWords").textContent = output;
}

// Aufruf der Funktion, um die Uhrzeit sofort beim Laden der Seite anzuzeigen
getTimeInWords();

// Aktualisieren Sie die Uhrzeit jede Minute
setInterval(getTimeInWords, 600);