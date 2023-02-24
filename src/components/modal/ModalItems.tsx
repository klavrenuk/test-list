import React, {useState, useEffect, useMemo} from 'react';
import {useAppSelector, useAppDispatch} from '../../redux/reducers/hooks';
import {Form, Button, Modal} from 'react-bootstrap';

import {IListItem} from "../../interfaces/IListItem";

import Item from './Item';

import './styles/modal_items.min.css';

export default function ModalItems() {
    const [isShow, setIsShow] = useState<boolean>(false);
    const [item, setItem] = useState<IListItem | null>(null);

    const state = useAppSelector((state) => state.modal);
    const stateItems = useAppSelector((state) => state.items);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(state.isShow !== isShow) {

            if(state.isShow) setItem(state.item);
            else setItem(null);

            setIsShow(state.isShow);
        }

    }, [state])

    const handleClose = () => {
        setIsShow(false);
        dispatch({type: 'closeModal'});
    };

    const handleSave = () => {
        const arr = stateItems.items.slice();
        arr[state.index] = state.item;

        dispatch({type: 'setItems', items: arr});
        dispatch({type: 'closeModal'});
    }

    const form = useMemo(() => {
        if(!item) return null;

        const props = Object.entries(item);

        return (
            <Form className={'modal_items'}>
                <ul className={'modal_items-list'}>
                    {
                        props.map((prop, index) => {
                            return (
                                <li key={prop[0]} className={'modal_item-list-item'}>
                                    <Item itemKey={prop[0]} valueDefault={prop[1]} />
                                </li>
                            )
                        })
                    }
                </ul>
            </Form>
        )
    }, [item]);

    const renderTitle = () => {
        if(item && item.id) return item.name;

        return 'New Items';
    }

    return (
        <Modal show={isShow} onHide={handleClose} size={'lg'}>
            <Modal.Header closeButton>
                <Modal.Title>{renderTitle()}</Modal.Title>
            </Modal.Header>

            <Modal.Body>{form}</Modal.Body>

            <Modal.Footer>
                <Button variant="link" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleSave}>Save</Button>
            </Modal.Footer>
        </Modal>
    )
}