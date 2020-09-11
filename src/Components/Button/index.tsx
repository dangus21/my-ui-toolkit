import React from 'react';
import cn from 'class-names';
import styles from './styles.module.css';

export interface IProps {
    children?: React.ReactNode,
    pointer?: boolean,
    disabled?: boolean,
    border?: boolean,
    type?: 'square' | 'basic' | 'round',
    size?: 'small' | 'medium' | 'large' | 'extra' | 'jumbo',
    variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warn',
    onClick?: (event: React.MouseEvent) => void,
}

export const MUTButton = (props: IProps) => {
    const base = 'mut_button';

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

MUTButton.defaultProps = {
    children: 'Button text',
    pointer: false,
    disabled: false,
    border: false,
    type: 'basic',
    size: 'small',
    variant: 'primary',
}
