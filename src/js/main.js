
// Välkomstmeddelande
var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'God morgon';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'God eftermiddag';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'God kväll';

    document.getElementById('lblGreetings').innerHTML =
        '<b>' + greet + '</b> och välkommen till min webbplats!';
