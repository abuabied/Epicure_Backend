import { RestaurantsDal } from "../dal/restaurants.dal";

export class RestaurantsService {
  public async getRestaurants() {
    const dal = new RestaurantsDal();
    const res = await dal.findAll();
    return res;
  }

  public async createRestaurant(restaurant: any) {
    const dal = new RestaurantsDal();
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
