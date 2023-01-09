import { Request, Response } from "express";
import { ChefsService } from "../services/chefs.services";

export class ChefsController {
  public static async getAllChefs(req: Request, res: Response) {
    try {
      const service = new ChefsService();
      const chefs = await service.getAllChefs();
      return res.status(200).send(chefs);
    } catch (error) {
      return res.status(400).send({ status: "error", msg: error });
    }
  }

  public static async getNewChefs(req: Request, res: Response) {
    try {
      const service = new ChefsService();
      const chefs = await service.getNewChefs();
      return res.status(200).send(chefs);
    } catch (error) {
      return res.status(400).send({ status: "error", msg: error });
    }
  }

  public static async getPopularChefs(req: Request, res: Response) {
    try {
      const service = new ChefsService();
      const chefs = await service.getPopularChefs();
      return res.status(200).send(chefs);
    } catch (error) {
      return res.status(400).send({ status: "error", msg: error });
    }
  }

  public static async createChef(req: Request, res: Response) {
    try {
      const params = req.body;
      const service = new ChefsService();
      const chef = await service.createChef(params);
      return res.status(200).send(chef);
    } catch (error) {
      return res.status(400).send({ status: "error", msg: error });
    }
  }

  public static async getChefOfTheWeek(req: Request, res: Response) {
    try {
      const service = new ChefsService();
      const chef = await service.getChefOfTheWeek();
      return res.status(200).send(chef);
    } catch (error) {
      return res.status(400).send({ status: "error", msg: error });
    }
  }
}
