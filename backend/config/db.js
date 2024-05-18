import mongoose from "mongoose";

export const connectDb = async () => {
    await mongoose.connect('mongodb+srv://sayankkhutia:iamSK_99@cluster0.kaigc7p.mongodb.net/food-delivery').then(() => {
        console.log("DB Connected")
    });
}