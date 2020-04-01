"use strict";
exports.__esModule = true;
var ArrayComponent = /** @class */ (function () {
    function ArrayComponent() {}
    ArrayComponent.prototype.arrayMultiply = function (myArray) {
        var temp = [],
            j = 0;
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 5 === 0 || myArray[i] % 10 === 0) {
                temp[j] = myArray[i];
                j++;
            }
        }
        return temp;
    };
    ArrayComponent.prototype.arraySeparate = function (myArray) {
        var str = [],
            j = 0;
        for (var i = 0; i < myArray.length; i++) {
            if (typeof myArray[i] === "string") {
                str[j] = myArray[i];
                j++;
            }
        }
        return str;
    };
    ArrayComponent.prototype.arraySplit = function (str) {
        var result = myArray1[0].match(/\d+/gi).map(Number);
        var k = 0;
        for (var i = 0; i < result.length; i++) {
            if (result[i] % 2 === 0) {
                console.log(result[i] + " prime number");
            } else {
                console.log(result[i] + " not a prime number");
            }
        }
        return result;
    };
    ArrayComponent.prototype.arraySort = function (myArray) {
        myArray.sort();
        myArray.reverse();
        return myArray;
    };
    ArrayComponent.prototype.arrayReplace = function (myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 3 === 0)
                myArray[i] = 5;
        }
        return myArray;
    };
    return ArrayComponent;
}());
exports.ArrayComponent = ArrayComponent;
var myArray = [53, 67, 55, 34, 23, 80, 78, "sneha", "satish"];
var myArray1 = [" 63 55 39 13 25 33 80 sneha satish"];
var array = new ArrayComponent();
console.log(array.arrayMultiply(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySplit(myArray1));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));