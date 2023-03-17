import express, { Express, Request, Response } from 'express';
const router = express.Router();
import JSONResponse from '../libs/JSONResponse';

router.get('/', (req: Request, res: Response) => {
    JSONResponse.success(req,res,'Hello World!',{success:true});
   
});
router.post('/', (req: Request, res: Response) => {
    JSONResponse.success(req,res,'OK',req.body);
});
export default router;