let arr = [1, 2, 2, 3, 4, 4, 5];

const removeDub = arr.filter((a,b)=>{
    return arr.indexOf(a) == b;
})

console.log(removeDub);