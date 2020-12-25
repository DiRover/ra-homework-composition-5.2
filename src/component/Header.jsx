/*Компонент отвечает за рендер заголовка с новостями*/

import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
    const { headerStyle } = props;
    return (
        <div className={ headerStyle }>
            { props.children}
        </div>
    )
};

Header.propTypes = {
    headerStyle: PropTypes.string,
};