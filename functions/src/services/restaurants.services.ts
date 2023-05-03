/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable require-jsdoc */
import {RestaurantsDal} from "../dal/restaurants.dal";

export class RestaurantsService {
  public async getRestaurants() {
    const dal = new RestaurantsDal();
    const res = await dal.findAll();
    return res;
  }

  public async createRestaurant(restaurant: any) {
    const dal = new RestaurantsDal();
    restaurant.chefName =
      restaurant?.chefName !== undefined ? restaurant.chefName : "";
    restaurant.established =
      restaurant.established !== undefined ? restaurant.established : "1990";
    restaurant.openH =
      restaurant.openH !== undefined ? restaurant.openH : "08:00";
    restaurant.closeH =
      restaurant.closeH !== undefined ? restaurant.closeH : "22:00";
    restaurant.img =
      restaurant.img !== undefined ? restaurant.img : "noImg.png";
    restaurant.rating = restaurant.rating !== undefined ? restaurant.rating : 0;
    restaurant.popular =
      restaurant.popular !== undefined ? restaurant.popular : false;
    restaurant.new = restaurant.new !== undefined ? restaurant.new : false;
    restaurant.open = restaurant.open !== undefined ? restaurant.open : false;

    const res = dal.createRestaurant(restaurant);
    return res;
  }

  public async getPopularRestaurants() {
    const dal = new RestaurantsDal();
    const res = dal.getPopularRestaurants();
    return res;
  }

  public async getNewRestaurants() {
    const dal = new RestaurantsDal();
    const res = dal.getNewRestaurants();
    return res;
  }

  public async getOpenRestaurants() {
    const dal = new RestaurantsDal();
    const res = dal.getOpenRestaurants();
    return res;
  }

  public async getRestaurantByName(restaurant: any) {
    const dal = new RestaurantsDal();
    const res = dal.getRestaurantByName(restaurant?.name);
    return res;
  }
}
