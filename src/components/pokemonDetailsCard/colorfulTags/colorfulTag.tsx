import React from 'react';
import { getPokcolor } from '../../../constants/pokemon.types';
import "./colorfulTags.scss";
import PropTypes from 'prop-types';

const ColorfulTag = ({ text, className, type }) => {


    return (
        <div>
            <div className={className}>
                <span style={{
                    background: getPokcolor(type)
                }} className="colorful-tag">{text}</span>
            </div>
        </div>
    )
}
ColorfulTag.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.any
}

export default ColorfulTag;