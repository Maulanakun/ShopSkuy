import { getMongoClientInstance } from "../config";
import { Db, ObjectId } from "mongodb";
import { hashPassword } from "../helpers/bcryptts";

export type UserModel = {
  _id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  pfp?: string;
};

export type createUser = Omit<UserModel, "_id">;

const DATABASE_NAME = process.env.DATABASE_NAME;
const collectionName = "users";

export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db = client.db(DATABASE_NAME);
  return db;
};

export const getUserByEmail = async (email: string) => {
  const db = await getDb();
  const user = (await db
    .collection(collectionName)
    .findOne({ email: email })) as UserModel | null;
  return user;
};

export const getUserById = async (id: string) => {
  const db = await getDb();
  const user = (await db
    .collection(collectionName)
    .findOne(
      { _id: new ObjectId(id) },
      { projection: { password: 0 } }
    )) as UserModel | null;
  return user;
};

export const register = async (input: createUser) => {
  const db = await getDb();
  const hashInput = {
    ...input,
    password: hashPassword(input.password),
  };
  const newUser = await db.collection(collectionName).insertOne(hashInput);
  const findUser = await db.collection(collectionName).findOne({
    _id: newUser.insertedId,
  });
  return findUser;
};
