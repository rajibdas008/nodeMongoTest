const express=require('express');
const router = express.Router();
const dbConnection=require('../config/db');
const userModel=require('../models/user.model');
const fileUploadMiddleware=require('../config/middlewares/filUpload.middleware');

/* GET users listing. */
router.get('/', function(req, res, next) {
  userModel.getAllUsers(function(err,result){
    console.log("##########################################");
    console.log(res);
    if(err)return res.json({status:-1,error:err})
    res.json({
      status:1,
      result:result
    })
  });
}).post('/',function(req,res,next){

  fileUploadMiddleware(req,res,(err)=>{
    console.log(res);
    if(err)res.json({status:-1,error:err})
    // userModel.createUser(req.body,function(err,result){
    //   if(err)res.json({status:-1,error:err})
    //   res.json({
    //     status:1,
    //     result:result
    //   })
    // })
  })
});



module.exports = router;
