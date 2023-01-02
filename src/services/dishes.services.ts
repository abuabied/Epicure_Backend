import { DishesDal } from "../dal/dishes.dal";

export class DishesService {
  public async getDishes() {
    const dal = new DishesDal();
    const res = await dal.findAll();
    return res;
  }

  public async createDish(dish: any) {
    const dal = new DishesDal();
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
