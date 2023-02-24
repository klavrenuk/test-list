import {Response} from "express";
import * as fs from 'fs';

class Items {
    private urlFile:string;

    constructor() {
        this.urlFile = process.cwd() + '/server/jsons/items.json';
    }

    async getData(response:Response) {
        try {
            const items = JSON.parse(fs.readFileSync(this.urlFile, 'utf-8'));

            response.status(200).json({
                items: items
            });


        } catch (err) {
            console.error(err);
            response.status(500).send('Server error');
        }
    }
}

export default Items;