import express, { Express, Request , Response} from 'express';
import bodyparser from 'body-parser';
// controllers
import UserController from './users/user.controller';

class App {
    public express;

    constructor(controllers: UserController[]){
        this.express = express();
        this.middleware();
        this.initializeControllers(controllers);
    }
    private middleware() {
        this.express.use(bodyparser.urlencoded({extended:true}))
        this.express.use(bodyparser.json())
    }

    private initializeControllers(controllers: any[]) {
        controllers.forEach((controller: { router: any; }) => {
            console.log(controller.router);
          this.express.use('/', controller.router);
        });
      }
}

export default new App([
    new UserController()
]).express;