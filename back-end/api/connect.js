import { MongoClient } from "mongodb";

const URI = "mongodb+srv://pedrovenicio456:Xw4f6V2XgqbWQaAU@cluster0.a0tnj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

//Xw4f6V2XgqbWQaAU

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");

//const songCollection = await db.collection('songs').find({}).toArray();