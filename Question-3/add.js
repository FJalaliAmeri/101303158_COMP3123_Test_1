//To run this code please open the terminal and run the following command: npm run Q3A

//Farshad Jalali Ameri - 101303158

const fs = require('fs')
const process = require('process')
const path = require('path')
const dir = path.join(__dirname, 'logs/')

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir)
    console.log("Directory created...")
} else {
    console.log("Directory already exists...")
}

process.chdir(dir)
for (let i = 0; i < 10; i++) {
    fs.writeFileSync(`log${i}.txt`, `Log number ${i}`)
    console.log(`Created log${i}.txt`)
}
