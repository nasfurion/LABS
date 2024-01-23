document.addEventListener("DOMContentLoaded", function() {
    console.log("Hello, this the airport checker program!");
    let location = "Halifax";
    let outputDiv = document.getElementById("outputDiv");

    if (location === "Halifax") {
        outputDiv.innerText = "The code for Halifax Airport is YHZ";
    } else {
        outputDiv.innerText = "Where are you located?<br>Where are you going?";
    }
});