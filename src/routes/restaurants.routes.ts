const express = require("express");
import { RestaurantsController } from "../controllers/restaurantsController";
const router = express.Router();
router.get("/getRestaurants", RestaurantsController.getRestaurants);
router.get(
  "/getPopularRestaurants",
  RestaurantsController.getPopularRestaurants
);
router.get("/getNewRestaurants", RestaurantsController.getNewRestaurants);
router.get("/getOpenRestaurants", RestaurantsController.getOpenRestaurants);
router.get("/getRestaurantByName", RestaurantsController.getRestaurantByName);
router.post("/createRestaurant", RestaurantsController.createRestaurant);
export default router;
