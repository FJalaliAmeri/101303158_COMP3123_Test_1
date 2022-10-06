//To run this code please open the terminal and run the following command: npm run Q3R

//Farshad Jalali Ameri - 101303158

const fs = require('fs')
const path = require('path')
const dir = path.join(__dirname, 'logs/')

if(fs.existsSync(dir)){
    console.log("Directory exists, removing files...")
    fs.readdirSync(dir).forEach(file => {
        fs.unlinkSync(dir + file)
        console.log("Deleted File..." + file)
    })
    fs.rmdirSync(dir)
} else {
    console.log("Directory does not exist, nothing to remove...")
}