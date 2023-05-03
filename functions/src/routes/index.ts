import express = require("express");
import authRoutes from "./auth.routes";
import chefsRoutes from "./chefs.routes";
import dishesRoutes from "./dishes.routes";
import restaurantsRoutes from "./restaurants.routes";

const router = express.Router();

router.get("/api/test", (req, res) => res.send("hello"));

router.use("/api/chefs/", chefsRoutes);
router.use("/api/restaurants/", restaurantsRoutes);
router.use("/api/dishes/", dishesRoutes);
router.use("/api/auth/", authRoutes);
export default router;
