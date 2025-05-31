// const numbers = [12, 98, 5, 41, 23, 78, 46];

// for(i=0; i<numbers.length; i++)
// {
//     let num=numbers[i]
//     if(num%2===0)
//     {
//         console.log(num)
//     }
// }

const numbers = [12, 98, 5, 41, 23, 78, 46];

for (let num of numbers) {
    if (num % 2 === 0) {
        console.log(num);
    }
}
