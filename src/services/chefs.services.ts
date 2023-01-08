import { ChefsDal } from "../dal/chefs.dal";

export class ChefsService {
  public async getAllChefs() {
    const dal = new ChefsDal();
    const res = await dal.getAllChefs();
    return res;
  }

  public async getNewChefs() {
    const dal = new ChefsDal();
    const res = await dal.getNewChefs();
    return res;
  }

  public async getPopularChefs() {
    const dal = new ChefsDal();
    const res = await dal.getPopularChefs();
    return res;
  }

  public async createChef(chef: any) {
    const dal = new ChefsDal();
    chef.name = `${chef.fname} ${chef.lname}`;
    chef.description = chef.description !== undefined ? chef.description : "";
    chef.img = chef.img !== undefined ? chef.img : "noImg.png";
    chef.popular = chef.popular !== undefined ? chef.popular : false;
    chef.new = chef.new !== undefined ? chef.new : false;

    const res = dal.createChef(chef);
    return res;
  }

  public async getChefOfTheWeek() {
    const dal = new ChefsDal();
    const res = await dal.getChefOfTheWeek();
    return res;
  }
  /*  public async updateChef(chef: any) {
    const dal = new ChefsDal();
    const res = await dal.updateChef(chef);
    return res;
  } */
}
