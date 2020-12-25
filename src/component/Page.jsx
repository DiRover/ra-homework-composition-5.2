/*Компонент отвечает за рендер всей страницы*/

import React from 'react';

export default function Page(props) {
    return (
        <React.Fragment>
            { props.children}
        </React.Fragment>
    )
}