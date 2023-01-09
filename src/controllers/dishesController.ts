import { Request, Response } from "express";
import { DishesService } from "../services/dishes.services";

export class DishesController {
  public static async getDishes(req: Request, res: Response) {
    try {
      const service = new DishesService();
      const dishes = await service.getDishes();
      return res.status(200).send(dishes);
    } catch (error) {
      return res.send({ status: "error", msg: error });
    }
  }

  public static async createDish(req: Request, res: Response) {
    try {
      const params = req.body;
      const service = new DishesService();
      const dish = await service.createDish(params);
      return res.status(200).send(dish);
    } catch (error) {
      return res.status(400).send({ status: "error", msg: error });
    }
  }

  public static async getLunchDishes(req: Request, res: Response) {
    try {
      const service = new DishesService();
      const dishes = await service.getLunchDishes();
      return res.status(200).send(dishes);
    } catch (error) {
      return res.status(400).send({ status: "error", msg: error });
    }
  }

  public static async getBreakfastDishes(req: Request, res: Response) {
    try {
      const service = new DishesService();
      const dishes = await service.getBreakfastDishes();
      return res.status(200).send(dishes);
    } catch (error) {
      return res.status(400).send({ status: "error", msg: error });
    }
    
  }

  public static async getDinnerDishes(req: Request, res: Response) {
    try {
      const service = new DishesService();
      const dishes = await service.getDinnerDish();
      return res.status(200).send(dishes);
    } catch (error) {
      return res.status(400).send({ status: "error", msg: error });
    }  
  }
}
