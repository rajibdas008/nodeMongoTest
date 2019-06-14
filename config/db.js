
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/test1', {useNewUrlParser: true}).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
        console.log('coneected!!');
    },
    err => { /** handle initial connection error */
        console.log(err);
     }
);



module.exports=mongoose;
