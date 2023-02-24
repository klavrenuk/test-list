import React, {useMemo} from 'react';
import {useAppSelector} from "../../redux/reducers/hooks";

import ListItemCard from "./ListItemCard";
import NoData from "../no-data/NoData";

import {IListItem} from "../../interfaces/IListItem";

import './styles/list-items.min.css';


export default function ListItems() {
    const state = useAppSelector((state) => state.items);

    if(!state.items.length) return <NoData />

    return (
        <ul className={'list_items'}>
            {
                state.items.map((item:IListItem, index:number) => {
                    return <li key={item.id} className={'item'}>
                        <ListItemCard item={item} index={index} />
                    </li>
                })
            }
        </ul>
    )
}