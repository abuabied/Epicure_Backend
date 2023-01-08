import Chefs from "../db/models/chefs";

export class ChefsDal {
  public createChef(chef: any) {
    const newChef = new Chefs({
      fname: chef.fname,
      lname: chef.lname,
      name: chef.name,
      description: chef.description,
      img: chef.img,
      popular: chef.popular,
      new: chef.new,
    });

    newChef.save(function (err: any, results: any) {
      if (err) {
        throw err;
      }
      return results;
    });
  }

  public getAllChefs() {
    return Chefs.find();
  }

  /*   public async updateChef(chef: any) {
    const data = await Chefs.findOne({
      name: chef.name,
    }).updateOne({ $set: { age: chef.age } });
    return data;
  } */

  public async getChefOfTheWeek() {
    try {
      const data = await Chefs.aggregate([
        { $match: { chefOfTheWeek: true } },
        {
          $lookup: {
            localField: "restaurants",
            foreignField: "_id",
            from: "restaurants",
            as: "restaurants",
          },
        },
      ]);
      return data;
    } catch (error) {
      return error;
    }
  }

  public async getPopularChefs() {
    const data = await Chefs.aggregate([
      { $match: { popular: true } },
      {
        $lookup: {
          localField: "restaurants",
          foreignField: "_id",
          from: "restaurants",
          as: "restaurants",
        },
      },
    ]);
    return data;
  }

  public async getNewChefs() {
    const data = await Chefs.aggregate([
      { $match: { new: true } },
      {
        $lookup: {
          localField: "restaurants",
          foreignField: "_id",
          from: "restaurants",
          as: "restaurants",
        },
      },
    ]);
    return data;
  }
}
