import mongoose from "mongoose";

function getMongoUri(): string {
  const uri =
    process.env.MONGODB_URI || process.env.Mongodb_URL || process.env.MONGODB_URL;

  if (!uri) {
    throw new Error(
      "Missing MongoDB connection string. Set MONGODB_URI or Mongodb_URL in your environment."
    );
  }

  return uri;
}

const MONGODB_URI = getMongoUri();

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

const cache: MongooseCache = global.mongooseCache || {
  conn: null,
  promise: null,
};

global.mongooseCache = cache;

export async function connectMongo() {
  if (cache.conn) {
    return cache.conn;
  }

  if (!cache.promise) {
    mongoose.set("strictQuery", false);
    cache.promise = mongoose.connect(MONGODB_URI).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  cache.conn = await cache.promise;
  return cache.conn;
}
