import { UsersDal } from "../dal/users.dal";
import bcrypt from "bcrypt";

export class UsersService {
  public async register(user: any) {
    const dal = new UsersDal();
    const saltRounds = 10;
    const UserExists = await dal.ifUserExists(user);
    if (UserExists) return { status: "failure", msg: "Email already exists!" };

    bcrypt.hash(user.password, saltRounds, async (err, hash) => {
      user.password = hash;
      await dal.register(user);
    });

    let res = await dal.ifUserExists(user);
    res = await dal.ifUserExists(user);
    if (res) return { status: "success", msg: "Register successful" };
    return { status: "error", msg: "Something went wrong! Try again." };
  }


  public async login(user: any) {
    const dal = new UsersDal();
    const UserExists = await dal.ifUserExists(user);
    if (UserExists) {
      const passwordHashed = await dal.getUserPassword(user);

      const passwordsMatch = await bcrypt.compare(
        user.password,
        passwordHashed as string
      );
      if (passwordsMatch) return { status: "success", msg: "Login successful" };
    }
    return { status: "failure", msg: "Email or Password is incorrect!" };
  }
}
