/*Компонент отвечает за рендер главной новости, выделенной жирным шрифтом*/

import React from 'react';

export default function MainNews(props) {
    return (
        <div className='header_main_news'>
            { props.children}
        </div>
    )
}