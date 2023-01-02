import express from "express";
import chefsRoutes from "./chefs.routes";
import dishesRoutes from "./dishes.routes";
import restaurantsRoutes from "./restaurants.routes";

const router = express.Router();

router.use("/api/chefs/", chefsRoutes);
router.use("/api/restautrants/", restaurantsRoutes);
router.use("/api/dishes/", dishesRoutes);
export default router;
