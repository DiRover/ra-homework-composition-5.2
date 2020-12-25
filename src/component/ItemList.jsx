/*Компонент отвечает за рендер элемента списков*/

import React from 'react';

export default function ItemContent(props) {
    return (
        <li>{ props.children }</li>
    )
}