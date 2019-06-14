const mongoose = require('mongoose');
const userSchema=new mongoose.Schema({
    name: String,
    address: String,
    status:Number
})

const User = mongoose.model('user',userSchema);

UserModel={};

UserModel.getAllUsers=function(callback){
   User.find().lean().exec(function(err,res){
       if(err)return callback(err,null)
       callback(null,res)
   })
}

UserModel.createUser=function(customer,callback){
    User.create(customer,function(err,res){
        if(err)return callback(err,null)
        callback(null,res)
    })
}

module.exports=UserModel;