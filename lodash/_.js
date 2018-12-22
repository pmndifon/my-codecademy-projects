const _ = {
  clamp(number, lower, upper) {
    if (number <= lower) {
      return lower;
    } else if (number >= upper) {
      return upper;
    } else if (number > lower && number < upper) {
      return number;
    }
    
    /*
    let lowerClampedValue = Math.max(number, lower); 
    let clampedValue = Math.min(lowerClampedValue, upper);    
    return clampedValue;
    */
  },
  
  inRange(number, start, end) {
    if (typeof end === 'undefined') {
      end = start;
      start = 0;
    }
    
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    
    let isInRange =  start <= number && number < end ? true : false;
    return isInRange;
	},
  
  words(str) {
    let wordArr = str.split(" ");
    return wordArr;
  },
  
  pad(string, length) {
    
    if (length <= string.length) {
      return string;
    } 
    
    let paddingAmt = length-string.length;
    let paddingStart = Math.floor(paddingAmt/ 2);
    let paddingEnd = paddingAmt - paddingStart;

   	let paddedString = ' '.repeat(paddingStart) + string + ' '.repeat(paddingEnd);

    
    /*
    let paddedString = string.split("");
    
    let countStart = 0;
    let countEnd = 0;
    
    do {
      paddedString.unshift(" ");
      countStart++;
    } while (countStart < paddingStart);
    
    do {
      paddedString.push(" ");
      countEnd++;
    } while (countEnd < paddingEnd);
    */
    return paddedString;
  },
  
  has(object, key) {
    if (!object.hasOwnProperty(key)) return false;

    return true;
   },
  
  invert(obj) {
    let invertedObj = {};
    
    for (key in obj) {
      originalValue = obj[key];
      invertedObj[originalValue] = key;
    }
    return invertedObj;
  },
  
  findKey(obj, func) {
    for (key in obj) {
      if (func(obj[key])) return key;
    }
  },
  
  drop(arr, number) {
    
    if (typeof number == 'undefined') {
      number = 1;
    }
    
    const droppedArray = arr.slice(number);
    return droppedArray;
  },
  
  dropWhile(myArry, func) {
    const dropNumber = myArry.findIndex((element, index) => {
      return !func(element, index, myArry);
    });
    
    const droppedArray = this.drop(myArry, dropNumber);
    
    return droppedArray;
  },
  
  chunk(arr, size) {
    if (typeof size == 'undefined') {
      size = 1;
    }
    
    let arrayChunks = [];
    
    for (i = 0; i < arr.length; i += size) {
      let arrayChunk = arr.slice(i, i+size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
}




// Do not write or modify code below this line.
module.exports = _;