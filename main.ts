import { ArrayService } from "./app-service";

export class ArrayComponent implements ArrayService {
  constructor() {}

  public arrayMultiply(myArray: number[]): Array<Number> {
    let temp = [],
      j = 0;
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] % 5 === 0 || myArray[i] % 10 === 0) {
        temp[j] = myArray[i];
        j++;
      }
    }
    return temp;
  }

  public arraySeparate(myArray: any): Array<string> {
    let str = [],
      j = 0;
    for (var i = 0; i < myArray.length; i++) {
      if (typeof myArray[i] === "string") {
        str[j] = myArray[i];
        j++;
      }
    }
    return str;
  }

  public arraySplit(str: any): Array<number> {
    const result = myArray1[0].match(/\d+/gi).map(Number);

    let k = 0;
    for (var i = 0; i < result.length; i++) {
      if (result[i] % 2 === 0) {
        console.log(result[i] + " prime number");
      } else {
        console.log(result[i] + " not a prime number");
      }
    }
    return result;
  }

  public arraySort(myArray: any): Array<string> {
    myArray.sort();
    myArray.reverse();
    return myArray;
  }

  public arrayReplace(myArray: any): Array<number> {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] % 3 === 0) myArray[i] = 5;
    }
    return myArray;
  }
}

let myArray: any[] = [53, 67, 55, 34, 23, 80, 78, "sneha", "satish"];
let myArray1: any[] = [53, 67, 55, 34, 23, 80, 78, "sneha", "satish"];
let array = new ArrayComponent();

console.log(array.arrayMultiply(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySplit(myArray1));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));
