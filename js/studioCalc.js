/**
 * Created by Steve Smodish on 2/16/2016.
 */

// When user clicks 'Calculate' button, get input, do calculations, and display results.
document.getElementById("calculate").onclick = function () {
    var bpm = Number(document.getElementById("input").value);
    if (testInput(bpm)) {
        // There are 60000 milliseconds in a minute
        report(60000/bpm);
    };
};

// When user clicks 'Reset' button, clear html and re-hide div
document.getElementById("reset").onclick = function () {
   clearResult();
};

// Report function calculates milliseconds
var report = function (bpm) {
    document.getElementById("result").innerHTML = "<h3>" +
        bpm.toFixed(2) + " milliseconds per beat</h3>";
    showResult();
};

// Function tests for positive numeric input
var testInput = function (input) {
    if (isNaN(input) || (input < 0)) {
        document.getElementById("result").innerHTML =
            "<h3>Please enter a positive number.</h3>";
        showResult();
        return false;
    };
    return true;
};

// Function removes class='hidden' from div
var showResult = function() {
    var display = document.getElementById("result");
    display.className = 'row well';
};

// Function removes HTML and adds class='hidden' back to div
var clearResult = function() {
    var display = document.getElementById("result");
    display.innerHTML = '';
    display.className = 'hidden';
    document.getElementById("input").value = '';
};