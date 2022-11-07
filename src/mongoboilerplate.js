import { MongoClient } from "mongodb";
const url='mongodb://localhost:27017'
const client= new MongoClient(url);

async function getData() {
    let result = await client.connect();
    let db= result.db('college');
    let collection=db.collection('student');
    let response= await collection.find({}).toArray();
    console.log(response);
}