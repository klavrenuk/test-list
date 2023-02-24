import {Express, Request, Response} from 'express';
import Items from "./modules/Items";

const ITEMS_LIST = '/api/items';

const items = new Items();

function routes(app: Express) {
    app.get('/', (req:Request, res:Response) => res.send('ok'));

   app.get(ITEMS_LIST, (req:Request, res:Response) => items.getData(res));
}

export default routes;