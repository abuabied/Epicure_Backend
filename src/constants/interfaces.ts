export interface Chef {
  fname: string;
  lname: string;
  name?: string;
  id?: number;
  img: string;
  dateAdded?: Date;
  visited: boolean;
  new : boolean;
}

export interface Dish {
  name: string;
  description: string;
  type: string;
  time: string;
  price: number;
  img: string;
}

export interface Restaurant {
  name: string;
  breakfastDishes?: Dish[];
  lunchDishes?: Dish[];
  dinnerDishes?: Dish[];
  chef: Chef;
  signatureDish: Dish;
  rating: number;
  openH?: string;
  closeH?: string;
  img: string;
  new: boolean;
  popular: boolean;
  open:boolean;
}