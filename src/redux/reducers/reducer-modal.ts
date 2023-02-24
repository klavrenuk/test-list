import {AnyAction} from "redux";

const initState = {
    isShow: false,
    item: {},
    index: null
}

const reducerModal = (state = initState, action:AnyAction) => {
    switch (action.type) {
        case 'setItem':
            return {
                ...state,
                item: {
                    ...state.item,
                    [action.key]: action.value
                }
            };

        case 'showModal':
            return {
                ...state,
                isShow: true,
                item: action.item,
                index: action.index
            }

        case 'closeModal':
            return {
                ...state,
                isShow: false,
                item: null,
                index: null
            }

        default:
            return state;
    }
}

export default reducerModal;