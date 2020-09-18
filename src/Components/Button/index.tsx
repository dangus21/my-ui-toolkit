import React, { ButtonHTMLAttributes } from 'react';
import cn from 'clsx';
import * as styles from './styles.module.scss';

export type IProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode,
    pointer?: boolean,
    disabled?: boolean,
    border?: boolean,
    type?: 'square' | 'basic' | 'round',
    size?: 'small' | 'medium' | 'large' | 'extra' | 'jumbo',
    variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warn',
    text?: 'Click',
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
            {props.text}
        </button>
    );
};

MUTButton.defaultProps = {
    text: 'Button text',
    pointer: false,
    disabled: false,
    border: false,
    type: 'basic',
    size: 'medium',
    variant: 'primary',
}
