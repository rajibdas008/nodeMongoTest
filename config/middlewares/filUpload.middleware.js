var multer  = require('multer')



module.exports=multer({ 
            dest: 'uploads/',
            fileFilter:function(req, file, cb) {

                // The function should call `cb` with a boolean
                // to indicate if the file should be accepted
              
                // To reject this file pass `false`, like so:
                // cb(null, false)
              
                // // To accept the file pass `true`, like so:
                // cb(null, true)
              
                // // You can always pass an error if something goes wrong:
                // cb(new Error('I don\'t have a clue!'))
              
              }
    })
    .single('filesssss')
