const mongoose = require("mongoose");

const dishesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    restaurantName: {
      type: String,
    },
    ingrediants: {
      type: String,
    },
    img: {
      type: String,
    },
    price: {
      type: Number,
    },
    cusine: {
      type: String,
      lowercase: true,
    },
    categeory: {
      type: String,
      lowercase: true,
    },
    type: {
      type: String,
      lowercase: true,
    },
  },
  { timestamps: true }
);

const Dishes = mongoose.model("Dishes", dishesSchema);

export default Dishes;
