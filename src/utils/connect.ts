import mongoose from "mongoose";
import config from "config";
import { logger } from "./logger";

export const connect = async () => {
  const dbUri = config.get<string>("dbUrl");

  try {
    await mongoose.connect(dbUri);
    logger.info("Connected to DB");
  } catch (error) {
    logger.error(`Connection to DB has been failed: ${error} `);
    process.exit(1);
  }
};
