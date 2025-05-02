const santasArr = ['James', 'Yi', 'Grinch', 'Fatima', 'Tariq', 'Grinch', 'Clare', 'Grinch'];

const missingNamesArr = ['Florinda', 'Jose', 'Gibbs'];
 
let missingNamesIndex = 0;

santasArr.forEach((name,index) => {
    if (name === "Grinch" && missingNamesIndex < missingNamesArr.length) {
        santasArr[index] = missingNamesArr[missingNamesIndex++];
    };
});

console.log("Updated names list: ", santasArr); //Updated names list: ['James', 'Yi', 'Florinda', 'Fatima', 'Tariq', 'Jose', 'Clare', 'Gibbs']

