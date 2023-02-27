import mongoose from "mongoose";

const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/social-network-api";

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set("strictQuery", false);
const connection = mongoose.connection;

export default connection;
