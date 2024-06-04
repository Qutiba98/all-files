// 1-Write a function to find the largest element in an array.

// function findLargestElement(array) {
//     if (array.length === 0) {
//       return null; 
//     }
  
//     let largestElement = array[0];
  
//     for (let i = 1; i < array.length; i++) {
//       if (array[i] > largestElement) {
//         largestElement = array[i]; 
//       }
//     }
//     return largestElement;
//   }
//   const numbers = [3, 5, 7, 2, 8, 10, 4];
//   console.log(findLargestElement(numbers)); 

// 2-Write a function to find the smallest element in an array.

// function findSmallestElement(array) {
//     if (array.length === 0) {
//       return null; 
//     }
//       let smallestElement = array[0];
//       for (let i = 1; i < array.length; i++) {
//       if (array[i] < smallestElement) {
//         smallestElement = array[i];  
//       }
//   }
//   return smallestElement;
//   }
//   const numbers2 = [3, 5, 7, 2, 8, 10, 4];
//   console.log(findSmallestElement(numbers2));  

// 3-Write a function to find the sum of all elements in an array.

// function findSumOfElements(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }
// const numbers3 = [3, 5, 7, 2, 8, 10, 4];
// console.log(findSumOfElements(numbers3)); 


// 4-Write a function to find the average of all elements in an array.

// function findAverageOfElements(array) {
//     if (array.length === 0) {
//         return null; 
//     }

//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }

//     let average = sum / array.length;

//     return average;
// }
// const numbers = [3, 5, 7, 2, 8, 10, 4];
// console.log(findAverageOfElements(numbers)); //  5.571428571428571

// 5-Write a function to find the median of all elements in an array.

// function findMedianOfElements(array) {
//     if (array.length === 0) {
//         return null; 
//     }

//     array.sort((a, b) => a - b);

//     const mid = Math.floor(array.length / 2);

//     if (array.length % 2 === 0) {
//         return (array[mid - 1] + array[mid]) / 2;
//     } else {
//         return array[mid];
//     }
// }

// const numbers = [3, 5, 7, 2, 8, 10, 4];
// console.log(findMedianOfElements(numbers)); //  5


// 6-Write a function to remove all duplicates from an array.



// 7-Write a function to sort an array in ascending order.


// 8-Write a function to sort an array in descending order.


// 9-Write a function to shuffle the elements of an array randomly.
