/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable require-jsdoc */
import Users from "../db/models/users";

export class UsersDal {
  public async register(user: any) {
    const newUser = new Users({
      fname: user.fname,
      lname: user.lname,
      name: `${user.fname} ${user.lname}`,
      email: user.email,
      password: user.password,
    });
    const res = await newUser.save();
    return res;
  }

  public async ifUserExists(user: any) {
    const currentUser = await Users.findOne({email: `${user.email}`});
    if (currentUser) return true;
    return false;
  }

  public async getUserPassword(user: any) {
    const currentUser = await Users.findOne({email: `${user.email}`});
    return currentUser?.password;
  }
}
