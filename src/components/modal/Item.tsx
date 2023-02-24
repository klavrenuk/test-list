import React, {useState} from 'react';
import {useAppDispatch} from "../../redux/reducers/hooks";
import {FormGroup, Form} from 'react-bootstrap';
import {getInputType} from "../../middleware/Item";

import './styles/item.min.css';

interface IProps {
    itemKey: string,
    valueDefault: any
}

const Item = ({itemKey, valueDefault}: IProps) => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState<any>(valueDefault);
    const type = getInputType(itemKey);

    const updateStore = (value:any) => dispatch({type: 'setItem', key: itemKey, value: value})

    const handleChange = (event: any) => {
        const newValue = type === 'checkbox' ? event.target.checked : event.target.value;
        setValue(newValue);
        updateStore(newValue);
    }

    const content = () => {
        switch(type) {
            case 'date':
                return null;

            case 'textArea':
                return(
                    <Form.Control id={itemKey}
                                  as="textarea"
                                  rows={10}
                                  placeholder={`Please, enter ${itemKey}`}
                                  value={value}
                                  onChange={(event) => handleChange(event)}
                    />
                )

            case 'checkbox':
                return <Form.Check id={itemKey} type="checkbox" label={itemKey}
                                   defaultChecked={value}
                                   onChange={(event) => handleChange(event)}
                />


            default:
                return <Form.Control id={itemKey} type={'text'} value={value}
                                     placeholder={`Please, enter ${itemKey}`}
                                     onChange={(event) => handleChange(event)}
                />
        }
    }

    const label = typeof value === 'boolean' ? null
        : <Form.Label htmlFor={itemKey}>{itemKey}</Form.Label>;

    return (
        <FormGroup className={'item'}>
            {label}
            {content()}
        </FormGroup>
    )
}

export default Item;