const mongoose =require('mongoose');


const MONGO_URL= "mongodb://Danyal:danyal123@ac-mtluzeo-shard-00-00.b0l85pv.mongodb.net:27017,ac-mtluzeo-shard-00-01.b0l85pv.mongodb.net:27017,ac-mtluzeo-shard-00-02.b0l85pv.mongodb.net:27017/chatappp?ssl=true&replicaSet=atlas-k6slhx-shard-0&authSource=admin&retryWrites=true&w=majority"

const connect = () =>{
    mongoose.connect(MONGO_URL, {
        
    }).then(()=>{
        console.log("Database connected sucessfully");
    })
    .catch((err)=>{
        console.log(`An error occured while connecting to database ${err}`);
    })
}

module.exports= {connect};