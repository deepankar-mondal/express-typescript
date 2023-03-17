import express, { Express, Request , Response} from 'express';
import bodyparser from 'body-parser';
import apiv1routers from './routes/apiv1.route';

class App {
    public express;

    constructor(){
        this.express = express();
        this.middleware();
        this.loadRoutes()
    }
    private middleware() {
        this.express.use(bodyparser.urlencoded({extended:true}))
        this.express.use(bodyparser.json())
    }

    private loadRoutes(): void {
        this.express.use('/', apiv1routers);
    }
}

export default new App().express;