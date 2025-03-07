import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
export async function connectDB() {
  if (!client.topology) await client.connect();
  return client.db("windowhome"); // Nama DB
}
