/*Компонент отвечает за рендер каждого отдельного элемента контента*/
import React from 'react';

export default function ContentItem(props) {
    return (
        <div className='content_item'>
            { props.children }
        </div>
    )
}