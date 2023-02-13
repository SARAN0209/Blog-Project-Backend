const mongoose = require ('mongoose');
 db = async()=>{
   try {
      await mongoose.connect("mongodb+srv://saran24:blogproject@blog-project.e5wi3bm.mongodb.net/user?retryWrites=true&w=majority");
        console.log("Db Connnection Established")
    } catch(error){
        console.log('DB Error: ',error);
    }
   
}
module.exports = db;