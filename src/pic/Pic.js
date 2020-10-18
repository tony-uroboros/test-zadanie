import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import stomach from './stomach.png';
import tooth from './tooth.png';
import injury from './injury.png';
import heart from './heart2 1.png';

const Image = ({
    src, alt, className,
    }) => {
    
    const classes = classNames(
    className,
    );
    
    return (
    <img src={src} alt={alt} className={classes}/>
    );
    };
    Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    };
    Image.defaultProps = {
        src: 'stomach',
        alt: 'teeewer',
        className: 'imgg',
    };
    export default Image;