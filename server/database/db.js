import mongoose from "mongoose";

 const Connection = async(user,password)=>{

    const URL = `mongodb://${user}:${password}@ac-el8nypc-shard-00-00.mh58cfm.mongodb.net:27017,ac-el8nypc-shard-00-01.mh58cfm.mongodb.net:27017,ac-el8nypc-shard-00-02.mh58cfm.mongodb.net:27017/?ssl=true&replicaSet=atlas-icddgu-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{
           useUnifiedTopology: true,
           useNewUrlParser: true,
        });
        console.log("Database connected Successfully ")
    }catch(error){
        console.log("error while connecting with the databse", error.message);
    }
}

export default Connection;