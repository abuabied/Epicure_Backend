import { Router } from "express";
import { DishesController } from "../controllers/dishesController";
const router = Router();
router.get("/getDishes", DishesController.getDishes);
router.get(
  "/getLunchDishes",
  DishesController.getLunchDishes
);
router.get("/getDinnerDishes", DishesController.getDinnerDishes);
router.get("/getBreakfastDishes", DishesController.getBreakfastDishes);

router.post("/createDish", DishesController.createDish);

export default router;
