import { ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";
import { UserModel, getUserById } from "./users";
import { data, getProductsById } from "./product";
type whistlist = {
  _id: string;
  userId: string;
  productId: string;
  createdAt: string;
  updatedAt: string;
};
export type output = {
  userDetail: UserModel;
  wishlist: data[];
};

const DATABASE_NAME = process.env.DATABASE_NAME;
const collectionName = "whistlist";

export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db = client.db(DATABASE_NAME);
  return db;
};

export const addWishList = async (input: { productId: string }) => {
  const db = await getDb();
  const found = await db
    .collection(collectionName)
    .findOne({ productId: input.productId });

  if (found) {
    return null;
  }
  const whistlist = await db.collection(collectionName).insertOne(input);
  return whistlist;
};

export const deleteWishList = async (productId: string) => {
  const db = await getDb();
  await db.collection(collectionName).deleteOne({ productId });
};

export const getWishlist = async (userId: string) => {
  const db = await getDb();
  const whistlist = await db
    .collection(collectionName)
    .find({ userId: userId })
    .toArray();
  const rslt = await getUserById(userId);

  const productPromises = whistlist.map(async (el) => {
    const productData = await getProductsById(el.productId);
    // console.log(productData, "Data Produk");
    return productData;
  });

  const wishlistDenganProduk = await Promise.all(productPromises);
  const output = {
    userDetail: rslt,
    wishlist: wishlistDenganProduk,
  };

  return output;
};
