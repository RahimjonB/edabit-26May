//1. Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.
function transformUpvotes(str) {
    let voteCounts = str.split(" ");
    let transformedVotes = [];
  
    for (let i = 0; i < voteCounts.length; i++) {
      let count = voteCounts[i];
  
      if (count.endsWith("k")) {
        count = parseFloat(count) * 1000;
      } else {
        count = parseInt(count, 10);
      }
  
      transformedVotes.push(count);
    }
  
    return transformedVotes;
  }
  

//2. Create a function that takes a string, removes all "special" characters (e.g. ., !, @, #, $, %, ^, &, \, *, (, )) and returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.
function removeSpecialCharacters(str) {
    let cStr = str.replace(/[^a-zA-Z0-9-_ ]/g, "");
    return cStr;
  }
  
//3. Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).
function identicalFilter(arr) {
    return arr.filter(str => str.split('').every(char => char === str[0]));
  }
  
//4. Create a function that takes an array and returns the sum of all items in the array.
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        sum += sumArray(arr[i]); 
      } else {
        sum += arr[i];
      }
    }
    return sum;
  }

//5. Create a function which takes in an array of numbers and a number to find. Return the sum of every index in the array which matches the chosen number.
function sumFoundIndexes(arr, num) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        sum += i;
      }
    }
    return sum;
  }
  
//6. Create a function that takes an array of integers and returns the sum of all the integers that have an even index, multiplied by the integer at the last index.
function evenLast(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 2) {
      sum += arr[i];
    }
    return sum * (arr[arr.length - 1] || 0);
  }
  
//7. Write a function that returns all the elements in an array that are strictly greater than their adjacent left and right neighbors.
function miniPeaks(arr) {
    let result = [];
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
        result.push(arr[i]);
      }
    }
    return result;
  }

//8. Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
function minMax(arr) {
    var min = Math.min(...arr);
    var max = Math.max(...arr);
    return [min, max];
  }
  
//9. Create a function that takes two arrays and insert the second array in the middle of the first array.
function tuckIn(arr1, arr2) {
    return [arr1[0], ...arr2, arr1[1]];
  }
  
//10. Create a function that takes three parameters where:
// x is the start of the range (inclusive).
// y is the end of the range (inclusive).
// n is the divisor to be checked against.
function arrayOperation(x, y, n) {
    const result = [];
    for (let i = x; i <= y; i++) {
      if (i % n === 0) {
        result.push(i);
      }
    }
    return result;
  }
  

  //DATE

//11. Create a function that takes three values:
// h hours
// m minutes
// s seconds
// Return the value that's the longest duration.
function longestTime(h, m, s) {
    if (h >= m && h >= s) {
      return h;
    } else if (m >= h && m >= s) {
      return m;
    } else {
      return s;
    }
  }
  
//12. Write a function that, given a date (in the format MM/DD/YYYY), returns the day of the week as a string. Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", or "Saturday".
// To illustrate, the day of the week for "12/07/2016" is "Wednesday".
function getDay(dateString) {
    let date = new Date(dateString);
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
  }
  
//13. Write a function that takes time t1 and time t2 and returns the numbers of hours passed between the two times.
function hoursPassed(t1, t2) {
    let startTime = new Date("2000-01-01 " + t1);
    let endTime = new Date("2000-01-01 " + t2);
    if (startTime.getTime() === endTime.getTime()) {
      return "No time has passed.";
    }
    let timeDifference = endTime - startTime;
    let hours = Math.floor(timeDifference / (1000 * 60 * 60));
    return hours + " hours";
  }
  

//14.Create a function that takes date in the format yyyy/mm/dd as an input and returns "Bonfire toffee" if the date is October 31, else return "toffee".
function halloween(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (month === 10 && day === 31) {
      return "Bonfire toffee";
    } else {
      return "toffee";
    }
  }
  
//15. Write a function that takes a year and returns its corresponding century.
function centuryFromYear(year) {
    return Math.ceil(year / 100);
  }

//16. Write a function that takes time t1 and time t2 and returns the numbers of hours passed between the two times.
function hoursPassed(t1, t2) {
    let date1 = new Date("2000/01/01 " + t1);
    let date2 = new Date("2000/01/01 " + t2);
    let timeDiff = Math.abs(date2 - date1);
    let hoursPassed = Math.floor(timeDiff / (1000 * 60 * 60));
    if (hoursPassed === 0) {
      return "No time has passed.";
    }
    return hoursPassed + " hours";
  }

//17. Write a function that takes time t1 and time t2 and returns the number of hours passed between the two times.
function hoursPassed(t1, t2) {
    var time1 = new Date("1/1/2021 " + t1);
    var time2 = new Date("1/1/2021 " + t2);
  
    var timeDiff = Math.abs(time2.getTime() - time1.getTime());
    var hoursPassed = Math.floor(timeDiff / (1000 * 60 * 60));
  
    if (hoursPassed === 0) {
      return "no time passed";
    } else {
      return hoursPassed + " hours";
    }
  }
  
  
//18.The 2nd of February 2020 is a palindromic date in both dd/mm/yyyy and mm/dd/yyyy format (02/02/2020). Given a date in dd/mm/yyyy format, return true if the date is palindromic in both date formats, otherwise return false.
function palindromicDate(date) {
    let parts = date.split('/');
    let ddmmyyyy = parts[0] + parts[1] + parts[2];
    let mmddyyyy = parts[1] + parts[0] + parts[2];
  
    return ddmmyyyy === ddmmyyyy.split('').reverse().join('') && mmddyyyy === mmddyyyy.split('').reverse().join('');
  }
  
  
//19. Create a function that converts dates from one of five string formats:
// "January 9, 2019" (MM D, YYYY)
// "Jan 9, 2019" (MM D, YYYY)
// "01/09/2019" (MM/DD/YYYY)
// "01-09-2019" (MM-DD-YYYY)
// "01.09.2019" (MM.DD.YYYY)
function convertDate(dateString) {
    let date = new Date(dateString);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    return [month, day, year];
  }

//20. Given the parameters day, month and year, return whether that date is a valid date.
function isValidDate(day, month, year) {
    let date = new Date(year, month - 1, day);
    return (date.getDate() === day && date.getMonth() === month - 1 && date.getFullYear() === year);
  }
  
  