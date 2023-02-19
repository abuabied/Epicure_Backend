const express = require("express");
import { ChefsController } from "../controllers/chefsController";
const router = express.Router();
router.get("/getAllChefs", ChefsController.getAllChefs);
router.get("/getNewChefs", ChefsController.getNewChefs);
router.get("/getPopularChefs", ChefsController.getPopularChefs);
router.get("/getChefOfTheWeek", ChefsController.getChefOfTheWeek);
router.post("/createChef", ChefsController.createChef);
export default router;
