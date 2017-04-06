/**
 * Created by Steve on 2/19/2016.
 */
var report = function (celsius, farhenheit) {
    document.getElementById("result").innerHTML = celsius + "\&ordmC = " + farhenheit + "\&ordmF";
};

document.getElementById("f_to_c").onclick = function () {
    var f = Number(document.getElementById("temperature").value);
    if (testInput(f)) {
        report((f - 32) / 1.8, f);
    };
};

document.getElementById("c_to_f").onclick = function () {
    var c = Number(document.getElementById("temperature").value);
    if (testInput(c)) {
        report(c, 1.8 * c + 32);
    };
};

var testInput = function (input) {

    if (isNaN(input)) {
        document.getElementById("result").innerHTML = "Please enter a number.";
        return false;
    };
    return true;
};
