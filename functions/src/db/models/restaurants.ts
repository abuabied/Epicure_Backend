const mongoose = require("mongoose");

const restaurantsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    established: {
      type: String,
    },
    chefName: {
      type: String,
    },
    openH: {
      type: String,
    },
    closeH: {
      type: String,
    },
    dishes: {
      type: Array,
      default: [],
    },
    signatureDish: {
      type: String,
      default: "",
    },
    img: {
      type: String,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    popular: {
      type: Boolean,
    },
    new: {
      type: Boolean,
    },
    open: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const Restaurants = mongoose.model("Restaurants", restaurantsSchema);

export default Restaurants;