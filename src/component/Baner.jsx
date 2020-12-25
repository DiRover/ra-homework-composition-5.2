/*Компонент отвечает за рендер банера под полем поиска*/

import React from 'react';
import PropTypes from 'prop-types';

export default function Baner(props) {
    const { img, styleImg } = props;
    return (
        <img className={ styleImg } src={ img } alt='baner'/>
    )
};

Baner.propTypes = {
    img: PropTypes.string,
    styleImg: PropTypes.string,
};
