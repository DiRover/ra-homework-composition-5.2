/*Компонент отвечает за рендер поля поиска*/

import React from 'react';
import PropTypes from 'prop-types';

export default function SearchWidget(props) {
    const { logo } = props;
    const { buttonText } = props;
    return (
        <div className='search_widget'>
            <img className='search_logo' src={ logo } alt='search logo'/>
            <input className='search_input' type='text'></input>
            <button className='search_widget_button'>{ buttonText }</button>
        </div>
    )
}

SearchWidget.propTypes = {
    logo: PropTypes.string,
    buttonText: PropTypes.string,
};