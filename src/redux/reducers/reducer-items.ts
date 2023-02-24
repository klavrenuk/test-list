import {AnyAction} from "redux";

const initState = {
    items: []
}

const reducerItems = (state = initState, action:AnyAction) => {
    switch (action.type) {
        case 'setItems':
            return {
                ...state,
                items: action.items
            }

        default:
            return state;
    }
}

export default reducerItems;