import Dishes from "../db/models/dishes";
import Restaurants from "../db/models/restaurants";

export class DishesDal {
  public async createDish(dish: any) {
    const newDish = new Dishes({
      name: dish.name,
      restaurantName: `${
        dish.restaurantName !== undefined ? dish.restaurantName : ""
      }`,
      ingrediants: `${dish.ingrediants !== undefined ? dish.ingrediants : ""}`,
      img: `${dish.img !== undefined ? dish.img : "noImg.png"}`,
      price: `${dish.price !== undefined ? dish.price : 33}`,
      cusine: `${dish.cusine !== undefined ? dish.cusine : "general"}`,
      type: `${dish.type !== undefined ? dish.type : "general"}`,
      categeory: `${dish.categeory !== undefined ? dish.categeory : "lunch"}`,
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
