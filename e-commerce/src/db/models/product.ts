import { getMongoClientInstance } from "../config";
import { Db, ObjectId } from "mongodb";
export type data = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags?: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
};

const DATABASE_NAME = process.env.DATABASE_NAME;
const collectionName = "products";

export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db = client.db(DATABASE_NAME);
  return db;
};

export const getProducts = async () => {
  const db = await getDb();
  const data = (await db
    .collection(collectionName)
    .find()
    .project({})
    .toArray()) as data[];
  return data;
};
export const getProductsById = async (id: string) => {
  const db = await getDb();
  const data = await db
    .collection(collectionName)
    .findOne({ _id: new ObjectId(id) });
  return data;
};
