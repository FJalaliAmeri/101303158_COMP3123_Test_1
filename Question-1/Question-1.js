//To run this code please open the terminal and run the following command: npm run Q1
//Farshad Jalali Ameri - 101303158

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

let lowerCaseWords = (array) => {
    return new Promise((resolve, reject) => {
        if(array.length) {
            resolve(array.filter(item => typeof item === 'string').map(item => item.toLowerCase()))
        } else {
            reject('Error: No items in array')
        }
    })
    }  

lowerCaseWords(mixedArray).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})