import { Request, Response } from "express";
import { RestaurantsService } from "../services/restaurants.services";

export class RestaurantsController {
  public static async getRestaurants(req: Request, res: Response) {
    try {
      const service = new RestaurantsService();
      const restaurants = await service.getRestaurants();
      return res.status(200).send(restaurants);
    } catch (error) {
      return res.status(400).send({ status: "error", msg: error });
    }
  }

  public static async createRestaurant(req: Request, res: Response) {
    try {
      const params = req.body;
      const service = new RestaurantsService();
      const restaurant = await service.createRestaurant(params);
      return res.status(200).send(restaurant);
    } catch (error) {
      return res.status(400).send({ status: "error", msg: error });
    }
  }

  public static async getRestaurantByName(req: Request, res: Response) {
    try {
      const params = req.query;
      const service = new RestaurantsService();
      const restaurants = await service.getRestaurantByName(params);
      return res.status(200).send(restaurants);
    } catch (error) {
      return res.status(400).send({ status: "error", msg: error });
    }
  }

  public static async getPopularRestaurants(req: Request, res: Response) {
    try {
      const service = new RestaurantsService();
      const restaurants = await service.getPopularRestaurants();
      return res.status(200).send(restaurants);
    } catch (error) {
      return res.status(400).send({ status: "error", msg: error });
    }
  }

  public static async getNewRestaurants(req: Request, res: Response) {
    try {
      const service = new RestaurantsService();
      const restaurants = await service.getNewRestaurants();
      return res.status(200).send(restaurants);
    } catch (error) {
      return res.status(400).send({ status: "error", msg: error });
    }
  }

  public static async getOpenRestaurants(req: Request, res: Response) {
    try {
      const service = new RestaurantsService();
      const restaurants = await service.getOpenRestaurants();
      return res.status(200).send(restaurants);
    } catch (error) {
      return res.status(400).send({ status: "error", msg: error });
    }
  }
}
