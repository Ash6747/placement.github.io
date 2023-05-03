const mongoose = require('mongoose');
async function main(){
    await mongoose.connect('mongodb+srv://ashishsatpute6747:9srI5J3d1ZIkRYZj@cluster0.r2byugz.mongodb.net/studentInfo?retryWrites=true&w=majorityc');
    console.log("connection Successfull !! ");
}
main().catch(error =>console.log("connection not successfull !!"));