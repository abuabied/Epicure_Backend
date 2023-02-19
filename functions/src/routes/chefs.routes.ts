import { Router } from "express";
import { ChefsController } from "../controllers/chefsController";
const router = Router();
router.get("/getAllChefs", ChefsController.getAllChefs);
router.get("/getNewChefs", ChefsController.getNewChefs);
router.get("/getPopularChefs", ChefsController.getPopularChefs);
router.get("/getChefOfTheWeek", ChefsController.getChefOfTheWeek);
router.post("/createChef", ChefsController.createChef);
export default router;
