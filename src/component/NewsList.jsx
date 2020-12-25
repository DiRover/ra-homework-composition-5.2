/*Компонент отвечает за рендер сиписков с новосятми и прочим*/

import React from 'react';
import PropTypes from 'prop-types';

export default function NewsList(props) {
    const { styleList } = props;
    return (
        <ul className={ styleList }>
            { props.children(props.list) }
        </ul>
    )
};

NewsList.propTypes = {
    styleList: PropTypes.string,
};