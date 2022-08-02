const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {

    productname: { type: String, required: true },
    productprise: { type: Number, required: true },
    productdescription: { type: String, required: true },
    count: { type: Number, required: true },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
