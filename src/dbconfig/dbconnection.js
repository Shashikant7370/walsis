import mongoose from "mongoose";

const connect =async () => {
    try {
        await mongoose.connect(
          "mongodb://127.0.0.1:27017/walsis"
        );
        const db = mongoose.connection;
        db.on("connected", () => {
            console.log("MongoDB connected successfully");
        });
        db.on("error", (error) => {
            console.error("MongoDB connection error:", error.message);
            process.exit(1); 
        });
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1); // Exit the process with failure
    }
}
export default connect;