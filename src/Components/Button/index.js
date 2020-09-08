import './styles.scss';
import React from 'react';
import cn from 'class-names';
import types from 'prop-types';

const propTypes = {
    children: types.node,
    pointer: types.bool,
};

const defaultProps = {
    children: 'Button text',
    pointer: false,
};

export const Button = (props) => {
    return <button className={cn('muk_button', {})}>{props.children}</button>;
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
