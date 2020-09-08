import './styles.scss';
import React from 'react';
import cn from 'class-names';
import types from 'prop-types';

const propTypes = {
    children: types.node,
    pointer: types.bool,
    border: types.bool,
    type: types.oneOf([
        'square',
        'basic',
        'round',
    ]),
    size: types.oneOf([
        'small',
        'medium',
        'large',
        'extra',
        'jumbo',
    ]),
};

const defaultProps = {
    children: 'Button text',
    pointer: false,
    round: false,
    spaced: false,
    border: false,
    type: 'basic',
    size: 'medium',
};

const base = 'muk_button';

export const Button = (props) => {
    return (
        <button
            className={cn(
                base,
                `${base}--${props.type}`,
                `${base}--${props.size}`,
                {
                    [`${base}--pointer`]: props.pointer,
                    [`${base}--border`]: props.border,
                }
            )}>
            {props.children}
        </button>
    );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
