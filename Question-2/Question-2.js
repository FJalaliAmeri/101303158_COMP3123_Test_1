//To run this code please open the terminal and run the following command: npm run Q2

//Farshad Jalali Ameri - 101303158

resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = {'message' : 'delayed success!'}
            resolve(success)
        }, 500);
    });
}

rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                throw new Error(error)
            } catch (error) {
                reject({'error':'delayed exception!'})
            }
        }, 500);
    });
}

resolvedPromise().then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
})

rejectedPromise().catch((error) => {
    console.log(error);
})