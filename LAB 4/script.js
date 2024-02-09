// User's name and birthday
var userName = "Diego Amadio";
var birthday = new Date('1993-06-28T00:00:00');
var targetDate = new Date(birthday.getFullYear(), birthday.getMonth(), birthday.getDate());

function updateCountdown() {
    var now = new Date();
    // Set target date to next birthday
    targetDate = new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate());
    if (now.getTime() > targetDate.getTime()) {
        targetDate.setFullYear(targetDate.getFullYear() + 1);
    }

    var difference = targetDate - now;

    var weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
    var remainingDays = Math.floor(difference / (1000 * 60 * 60 * 24)) % 7;
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    var countdownString = '';
    if (weeks > 0) {
        countdownString += weeks + ' week' + (weeks > 1 ? 's' : '') + ', ';
    }
    if (remainingDays > 0) {
        countdownString += remainingDays + ' day' + (remainingDays > 1 ? 's' : '') + ', ';
    }
    countdownString += hours + ' hour' + (hours > 1 ? 's' : '') + ', ';
    countdownString += minutes + ' minute' + (minutes > 1 ? 's' : '') + ', ';
    countdownString += seconds + ' second' + (seconds > 1 ? 's' : '');

    document.getElementById('output').innerHTML = '<p>' + userName + ', ' + birthday.toDateString() + '</p><p id="countdownInfo">There are ' + countdownString + ' until Your next birthday!</p>';
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();