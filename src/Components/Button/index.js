import './styles.scss';
import React from 'react';
import cn from 'class-names';
import types from 'prop-types';

const propTypes = {
    children: types.node,
    pointer: types.bool,
    border: types.bool,
    round: types.bool,
};

const defaultProps = {
    children: 'Button text',
    pointer: false,
    border: false,
    round: false,
};

const base = 'muk_button';

export const Button = (props) => {
    return (
        <button
            className={cn(base, {
                [`${base}--pointer`]: props.pointer,
                [`${base}--border`]: props.border,
                [`${base}--round`]: props.round,
            })}>
            {props.children}
        </button>
    );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
