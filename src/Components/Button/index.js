import React from 'react';
import cn from 'class-names';
import types from 'prop-types';
import styles from './styles.module.scss';

const propTypes = {
    children: types.node,
    pointer: types.bool,
    disabled: types.bool,
    border: types.bool,
    type: types.oneOf(['square', 'basic', 'round']),
    size: types.oneOf(['small', 'medium', 'large', 'extra', 'jumbo']),
    variant: types.oneOf(['primary', 'secondary', 'success', 'error', 'warn']),
};

const defaultProps = {
    children: 'Button text',
    pointer: false,
    disabled: false,
    border: false,
    type: 'basic',
    size: 'small',
    variant: 'primary',
};

const base = 'mut_button';

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
                styles[base],
                styles[`${base}--type--${type}`],
                styles[`${base}--size--${size}`],
                styles[`${base}--variant--${variant}`],
                {
                    [styles[`${base}--pointer`]]: !disabled && pointer,
                    [styles[`${base}--border`]]: !disabled && border,
                    [styles[`${base}--disabled--border`]]: disabled && border,
                    [styles[`${base}--disabled`]]: disabled,
                }
            )}
            {...otherProps}>
            {children}
        </button>
    );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
