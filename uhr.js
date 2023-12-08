function getTimeInWords() {
    const hoursInWords = [
        'zwölfi', 'eis', 'zwöi', 'drü', 'vieri', 
        'füfi', 'sächsi', 'sibni', 'achti', 'nüni', 'zäni', 'elfi'
    ];

    const minutesInWords = [
        '', 'eis', 'zwöi', 'drü', 'vier', 
        'füf', 'sächs', 'sibä', 'acht', 'nün', 'zäh', 
        'elf', 'zwölf', 'drizäh', 'vierzäh', 'füfzäh',
        'sächzäh', 'sibzäh', 'achtzäh', 'nünzäh'
    ];

    const now = new Date();
    const hour = now.getHours() % 12;
    const minute = now.getMinutes();

    const nextHour = (hour + 1) % 12;

    const timeString = buildTimeString(hour, minute, nextHour, hoursInWords, minutesInWords);

    document.getElementById("timeInWords").textContent = timeString;
}

function buildTimeString(hour, minute, nextHour, hoursInWords, minutesInWords) {
    if (minute === 0) {
        return "Es isch " + hoursInWords[hour];
    }
    
    if (minute <= 20) {
        return `Es isch ${minutesInWords[minute]} ab ${hoursInWords[hour]}`;
    }

    if (minute < 30) {
        return `Es isch ${minutesInWords[30 - minute]} vor halbi ${hoursInWords[nextHour]}`;
    }

    if (minute === 30) {
        return `Es isch halbi ${hoursInWords[nextHour]}`;
    }

    if (minute < 40) {
        return `Es isch ${minutesInWords[minute - 30]} ab halbi ${hoursInWords[nextHour]}`;
    }

    return `Es isch ${minutesInWords[60 - minute]} vor ${hoursInWords[nextHour]}`;
}

// Aufruf der Funktion, um die Uhrzeit sofort beim Laden der Seite anzuzeigen
getTimeInWords();

// Aktualisieren Sie die Uhrzeit jede Minute
setInterval(getTimeInWords, 6000); // 6000 Millisekunden für eine Minute
