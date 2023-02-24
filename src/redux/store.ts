import {combineReducers} from "redux";
import { configureStore } from '@reduxjs/toolkit'

import reducerModal from './reducers/reducer-modal';
import reducerItems from "./reducers/reducer-items";

const rootReducer = combineReducers({
    modal: reducerModal,
    items: reducerItems
});

const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export default store;