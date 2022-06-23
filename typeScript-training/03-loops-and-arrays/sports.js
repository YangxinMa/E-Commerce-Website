"use strict";
exports.__esModule = true;
var sportOne = ["Golf", "Cricket", "Tennis", "Swimming"];
for (var _i = 0, sportOne_1 = sportOne; _i < sportOne_1.length; _i++) {
    var tempSport = sportOne_1[_i];
    if (tempSport == "Cricket") {
        console.log("".concat(tempSport, " << My Favorite!"));
    }
    else {
        console.log(tempSport);
    }
}
