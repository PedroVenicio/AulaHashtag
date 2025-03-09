import { MongoClient } from "mongodb";

const URI = "myURI"

//Xw4f6V2XgqbWQaAU

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");

//const songCollection = await db.collection('songs').find({}).toArray();
