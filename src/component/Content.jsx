/*Компонент отвечает за рендер контента под банером*/
import React from 'react';

export default function Content(props) {
    return (
        <div className='content'>
            { props.children(props.list) }
        </div>
    )
};

