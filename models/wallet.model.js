import mongoose from "mongoose";

const walletSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  balance: {
    type: Number,
    default: 0,
    required: true,
  },
  currency: {
    type: String,
    default: "NGN",
    enum: ["NGN"],
    required: true,
  },
});

const Wallet = mongoose.model("Wallet", walletSchema);

export default Wallet;
