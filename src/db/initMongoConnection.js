import mongoose from "mongoose";

import { env } from "../utils/env.js";

export const initMongoConnection = async () => {
  const MONGODB_PASSWORD = env("MONGODB_PASSWORD");
  const MONGODB_USER = env("MONGODB_USER");
  const MONGODB_URL = env("MONGODB_URL");
  const MONGODB_DB = env("MONGODB_DB");

  try {
    await mongoose.connect(
      `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Connection successful");
  } catch (error) {
    console.log(error);
    throw error;
  }
};
