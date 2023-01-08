import { Request, Response } from "express";
import { UsersService } from "./../services/users.services"

export class AuthController {
  public static async register(req: Request, res: Response) {
    try {
      const service = new UsersService();
      const params = req.body; 
      const users = await service.register(params);
      return res.status(200).send(users);
    } catch (error) {
      return res.send({ status: "error", msg: error });
    }
  }

  public static async login(req: Request, res: Response) {
    try {
      const service = new UsersService();
      const params = req.body; 
      const users = await service.login(params);
      return res.status(200).send(users);
    } catch (error) {
      return res.send({
        status: "error",
        msg: "Something went wrong! Try again.",
      });
    }
  }
}