import JSONResponse from "../libs/JSONResponse";
import express, { Express, Request, Response } from "express";
import User from './user.interface';

class UserController {
  public path = "/users";
  public router = express.Router();
  private users: User[] = [
    {
      email: 'deepankar.mondal@p360.com',
      name: 'Deepankar Mondal',
      phone: '9832500105',
    }
  ];
  constructor() {
    this.intializeRoutes();
  }
  public intializeRoutes() {
    this.router.get(this.path, this.getAllUsers);
    this.router.post(this.path, this.createUser);
  }
  
  getAllUsers = (request: express.Request, response: express.Response) => {
    return response.send(this.users);;
  };

  createUser = (request: express.Request, response: express.Response) => {
    const user: User = request.body;
    this.users.push(user);
    return  response.send(user);
  };
}

export default UserController;
