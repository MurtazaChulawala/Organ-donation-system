const express= require("express");
const app = express();
const { MongoClient } = require('mongodb');
const bodyParser = require("body-parser");
const user = process.env.user;
const password = process.env.password;
async function main() {
    const uri = "mongodb+srv://"+user+":"+password+"@cluster0.bnxmzjg.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log("database connected");

        app.use(bodyParser.json())
        app.post('/api/formdata',async (req,res)=>{
            await createnewentry(client,req.body)            
            res.json({"message":"Form submitted"})
        })

        app.listen(process.env.PORT||5000, ()=>{
            console.log("backend started")
        })
    } catch (e) {
        console.error(e);
    } 
};

main().catch(console.error);
async function createnewentry(client, newentry){
    const result = await client.db("organ_donation_system").collection("organ details").insertOne(newentry);
    console.log(`New entry created with the following id: ${result.insertedId}`);
}