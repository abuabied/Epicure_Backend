import Chefs from "../db/models/chefs";
import Restaurants from "../db/models/restaurants";

export class RestaurantsDal {
  public async createRestaurant(restaurant: any) {
    const newRestaurant = new Restaurants({
      name: restaurant.name,
      chefName: `${
        restaurant.chefName !== undefined ? restaurant.chefName : ""
      }`,
      established: `${
        restaurant.established !== undefined ? restaurant.established : "1990"
      }`,
      openH: `${restaurant.openH !== undefined ? restaurant.openH : "08:00"}`,
      closeH: `${
        restaurant.closeH !== undefined ? restaurant.closeH : "22:00"
      }`,
      img: `${restaurant.img !== undefined ? restaurant.img : "noImg.png"}`,
      rating: `${restaurant.rating !== undefined ? restaurant.rating : 0}`,
      popular: `${
        restaurant.popular !== undefined ? restaurant.popular : false
      }`,
      new: `${restaurant.new !== undefined ? restaurant.new : false}`,
      open: `${restaurant.open !== undefined ? restaurant.open : false}`,
    });

    const response = await Restaurants.create(newRestaurant);
    if (response.chefName !== "") {
      await Chefs.findOne({ name: response.chefName }).updateOne({
        $push: { restaurants: response._id },
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
      { $match: { popular: true } },
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

  public async getRestaurantByName(restaurantName: String) {
    const data = await Restaurants.aggregate([
      { $match: { name: `${restaurantName}` } },
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
    const data = await Restaurants.aggregate([{ $match: { new: true } }]);
    return data;
  }

  public async getOpenRestaurants() {
    const data = await Restaurants.aggregate([{ $match: { open: true } }]);
    return data;
  }
}
