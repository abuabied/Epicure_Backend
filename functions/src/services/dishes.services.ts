/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable require-jsdoc */
import {DishesDal} from "../dal/dishes.dal";

export class DishesService {
  public async getDishes() {
    const dal = new DishesDal();
    const res = await dal.findAll();
    return res;
  }

  public async createDish(dish: any) {
    const dal = new DishesDal();
    dish.restaurantName =
      dish.restaurantName !== undefined ? dish.restaurantName : "";
    dish.ingrediants = dish.ingrediants !== undefined ? dish.ingrediants : "";
    dish.img = dish.img !== undefined ? dish.img : "noImg.png";
    dish.price = dish.price !== undefined ? dish.price : 33;
    dish.cusine = dish.cusine !== undefined ? dish.cusine : "general";
    dish.type = dish.type !== undefined ? dish.type : "general";
    dish.categeory = dish.categeory !== undefined ? dish.categeory : "lunch";

    const res = dal.createDish(dish);
    return res;
  }

  public async getLunchDishes() {
    const dal = new DishesDal();
    const res = dal.getLunchDishes();
    return res;
  }

  public async getDinnerDish() {
    const dal = new DishesDal();
    const res = dal.getDinnerDishes();
    return res;
  }

  public async getBreakfastDishes() {
    const dal = new DishesDal();
    const res = dal.getBreakfastDishes();
    return res;
  }
}
