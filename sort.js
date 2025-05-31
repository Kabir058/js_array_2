let asort= ['rakib','sakib','nokib','akib']
console.log(asort.sort())

let num =[ 42,33,954,76,14,6,8,3,2,81,1,7]
console.log(num.sort(function (a,b){return a-b}))
console.log(num.sort(function(a,b){return b-a}))