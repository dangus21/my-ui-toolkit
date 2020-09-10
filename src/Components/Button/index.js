import './styles.scss';
import React from 'react';
import cn from 'class-names';
import types from 'prop-types';

const propTypes = {
    children: types.node,
    pointer: types.bool,
    disabled: types.bool,
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
    variant: types.oneOf([
        'error',
        'warn',
        'primary',
        'secondary',
    ]),
};

const defaultProps = {
    children: 'Button text',
    pointer: false,
    disabled: false,
    border: false,
    type: 'basic',
    size: 'medium',
    variant: 'primary',
};

const base = 'muk_button';

export const Button = (props) => {
    const {
        children,
        pointer,
        disabled,
        border,
        type,
        size,
        variant,
        ...otherProps
    } = props;

    return (
        <button
            className={cn(
                base,
                `${base}--type--${type}`,
                `${base}--size--${size}`,
                `${base}--${variant}`,
                {
                    [`${base}--pointer`]: pointer,
                    [`${base}--border`]:
                        border && !disabled,
                    [`${base}--disabled--border`]:
                        border && disabled,
                    [`${base}--disabled`]: disabled,
                }
            )}
            {...otherProps}>
            {children}
        </button>
    );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
