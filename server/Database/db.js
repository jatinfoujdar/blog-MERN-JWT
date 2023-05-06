import mongoose from "mongoose"

const Connection = async() =>{
    const URL = `mongodb://jatinfoujdar:jatinfoujdar1234@ac-kbusnl5-shard-00-00.g1o73sw.mongodb.net:27017,ac-kbusnl5-shard-00-01.g1o73sw.mongodb.net:27017,ac-kbusnl5-shard-00-02.g1o73sw.mongodb.net:27017/?ssl=true&replicaSet=atlas-10yuwk-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL,{useNewUrlParser: true});
        console.log(`database connected succesfully`);
    } catch (error) {
        console.log("error while with the database",error);
    }
}

export default Connection;