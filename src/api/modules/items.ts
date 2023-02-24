import axios from 'axios';

import {IListItem} from "../../interfaces/IListItem";

class Items {
    private url:string = '/api/items';

    get():Promise<IListItem[]> {
        return new Promise((resolve, reject) => {
            axios({url: this.url, method: 'GET'})
                .then((response) => resolve(response.data.items))
                .catch((err) => reject(err))
        })
    }
}

export default Items;

