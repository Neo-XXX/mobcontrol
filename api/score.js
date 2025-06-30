import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (!uri) {
    return res.status(500).json({ error: 'MONGODB_URI not set' });
  }

  if (!client.topology?.isConnected()) {
    await client.connect();
  }
  const db = client.db();
  const scores = db.collection('scores');

  if (req.method === 'POST') {
    const doc = { ...req.body, createdAt: new Date() };
    const result = await scores.insertOne(doc);
    return res.status(201).json({ id: result.insertedId });
  } else if (req.method === 'GET') {
    const list = await scores.find().sort({ createdAt: -1 }).limit(10).toArray();
    return res.status(200).json(list);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
