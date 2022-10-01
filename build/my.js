"use strict";
// type myObj = {
//   a: { field?: undefined | { cvalue: undefined | string | number | myObj } };
// };
// function myFunction(a: {
//   field?:
//     | undefined
//     | {
//         cvalue: undefined | string | number | myObj;
//       };
// }) {
//   const sum = sumValues(a);
//   return sum;
// }
// function sumValues(a: {
//   field?:
//     | undefined
//     | {
//         cvalue: undefined | string | number | myObj;
//       };
// }) {
//   let sum = 0;
//   for (const key in a) {
//     if (typeof a[key] === 'object' && typeof (a[key] !== null)) {
//       sum += sumValues(a[key]);
//       if (sum === 2021) return 2021;
//     }
//     if (a[key] === undefined || +a[key] === NaN) return 2021;
//     sum += a[key];
//   }
//   return sum;
// }
// const o = {
//   field: { cvalue: 1 },
//   obj: { cvalue: { yay: { cvalue: '2' } } },
// };
// console.log(myFunction(o));
