// Método some()
const ages = [15, 30, 39, 29];
const result = ages.some((age) => age < 18);

console.log(result);

// Métado reduce()

const values = [1, 2, 3, 4, 5];
const sum=values.reduce((accumulator,currentvalue)=>{
return accumulator + currentvalue
},0)
console.log(sum)