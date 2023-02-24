import React, {useMemo} from 'react';
import {useAppDispatch} from "../../redux/reducers/hooks";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import {IListItem} from "../../interfaces/IListItem";

import './styles/list-item.min.css';

interface IProps {
    item: IListItem,
    index: number
}

const ListItemCard = ({item, index}: IProps) => {
    const dispatch = useAppDispatch();

    const onShowModal = (item:object, index:number) => dispatch({
        type: 'showModal',
        item: item,
        index: index
    });

    const list = useMemo(() => {
        return Object.entries(item);
    }, [item]);

    return (
        <Card>
            <Card body className="item_card">
                <ul className={'item_card-list list'}>
                    {
                        list.map((item:any) => {
                            return (
                                <li key={item[0]} className={'list-item'}>
                                    <div className="prop">{item[0]}:</div>
                                    <div className={'value'}>{item[1].toString()}</div>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className={'item_card-control'}>
                    <Button color={'primary'}
                            onClick={() => onShowModal(item, index)}
                    >open</Button>
                </div>
            </Card>
        </Card>
    )
}

export default ListItemCard;