import Dishes from "../db/models/dishes";
import Restaurants from "../db/models/restaurants";

export class DishesDal {
  public async createDish(dish: any) {
    const newDish = new Dishes({
      name: dish.name,
      restaurantName: dish.restaurantName,
      ingrediants: dish.ingrediants,
      img: dish.img,
      price: dish.price,
      cusine: dish.cusine,
      type: dish.type,
      categeory: dish.categeory,
    });

    const response = await Dishes.create(newDish);
    if (response.restaurantName !== "") {
      const result = await Restaurants.findOne({
        name: response.name,
      }).updateOne({
        $push: { dishes: response._id },
      });
    }
    return response;
  }

  public findAll() {
    return Dishes.find();
  }

  public async getLunchDishes() {
    const data = await Dishes.aggregate([{ $match: { categeory: "lunch" } }]);
    return data;
  }

  public async getBreakfastDishes() {
    const data = await Dishes.aggregate([
      { $match: { categeory: "breakfast" } },
    ]);
    return data;
  }

  public async getDinnerDishes() {
    const data = await Dishes.aggregate([{ $match: { categeory: "dinner" } }]);
    return data;
  }
}
