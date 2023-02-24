import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import api from './api/';
import {useAppDispatch} from "./redux/reducers/hooks";

import ListItems from './components/list-items/ListItems';
import Loader from './components/loader/Loader';
import ModalItems from './components/modal/ModalItems';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.min.css';

import {IListItem} from "./interfaces/IListItem";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isUpdate, setIsUpdate] = useState(true);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const loadData = async() => {
            let items:IListItem[] = [];

            try {
                setIsLoading(true);

                items = await api.items.get();

            } catch (err) {
                console.error(err);

            } finally {
                dispatch({type: 'setItems', items: items});
                setIsLoading(false);
                setIsUpdate(false);
            }
        }

        if(isUpdate) {
            loadData();
        }

    }, [isUpdate])

    return (
        <div className="app">
            <Container>
                {
                    isLoading ? <Loader /> : <ListItems />
                }
            </Container>

            <ModalItems />
        </div>
    );
}

export default App;
