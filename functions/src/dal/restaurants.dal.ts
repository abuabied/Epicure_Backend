/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable require-jsdoc */
import Chefs from "../db/models/chefs";
import Restaurants from "../db/models/restaurants";

export class RestaurantsDal {
  public async createRestaurant(restaurant: any) {
    const newRestaurant = new Restaurants({
      name: restaurant.name,
      chefName: restaurant.chefName,
      established: restaurant.established,
      openH: restaurant.openH,
      closeH: restaurant.closeH,
      img: restaurant.img,
      rating: restaurant.rating,
      popular: restaurant.popular,
      new: restaurant.new,
      open: restaurant.open,
    });

    const response = await Restaurants.create(newRestaurant);
    if (response.chefName !== "") {
      await Chefs.findOne({name: response.chefName}).updateOne({
        $push: {restaurants: response._id},
      });
    }
    return response;
  }

  public async findAll() {
    const restaurants = await Restaurants.find();
    return restaurants;
  }

  public async getPopularRestaurants() {
    const data = await Restaurants.aggregate([
      {$match: {popular: true}},
      {
        $lookup: {
          localField: "signatureDish",
          foreignField: "_id",
          from: "dishes",
          as: "signatureDish",
        },
      },
    ]);
    return data;
  }

  public async getRestaurantByName(restaurantName: string) {
    const data = await Restaurants.aggregate([
      {$match: {name: `${restaurantName}`}},
      {
        $lookup: {
          localField: "dishes",
          foreignField: "_id",
          from: "dishes",
          as: "dishes",
        },
      },
    ]);
    return data;
  }

  public async getNewRestaurants() {
    const data = await Restaurants.find({new: true});
    return data;
  }

  public async getOpenRestaurants() {
    const data = await Restaurants.find({open: true});
    return data;
  }
}
