import mongoose = require("mongoose");

const chefsSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    restaurants: {
      type: Array,
      default: [],
    },
    description: {
      type: String,
    },
    img: {
      type: String,
    },
    popular: {
      type: Boolean,
    },
    new: {
      type: Boolean,
    },
    chefOfTheWeek: {
      type: Boolean,
      default: false,
    },
  },
  {timestamps: true}
);

const Chefs = mongoose.model("Chefs", chefsSchema);

export default Chefs;
