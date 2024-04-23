/* Translate days of the week
For each single day of the week log the translated output
e.g. if it is Monday, log "Montag" and so on
Choose any language you like
Try different ways: is it possible with if or switch? */




let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let userInput = prompt("Please enter the day in English (e.g., Sunday, Monday):");
let dayIndex = days.indexOf(userInput);

if (dayIndex !== -1) {
    switch (dayIndex) {
        case 0:
            alert('Sonntag');
            break;
        case 1:
            alert('Montag');
            break;
        case 2:
            alert('Dienstag');
            break;
        case 3:
            alert('Mittwoch');
            break;
        case 4:
            alert('Donnerstag');
            break;
        case 5:
            alert('Freitag');
            break;
        case 6:
            alert('Samstag');
            break;
        default:
            alert('Invalid input.');
    }
} else {
    alert('Invalid input.');
}
