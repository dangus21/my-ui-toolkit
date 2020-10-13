import React, { ButtonHTMLAttributes } from 'react';
import cn from 'clsx';
import css from './styles.module.scss';

export type IProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode,
    pointer?: boolean,
    disabled?: boolean,
    border?: boolean,
    glossy?: boolean,
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
        glossy,
        ...otherProps
    } = props;

    return (
        <button
            className={cn(
                css[base],
                css[`${base}--type--${type}`],
                css[`${base}--size--${size}`],
                css[`${base}--variant--${variant}`],
                {
                    [css[`${base}--variant--${variant}--glossy`]]: glossy,
                    [css[`${base}--pointer`]]: !disabled && pointer,
                    [css[`${base}--border`]]: !disabled && border,
                    [css[`${base}--disabled--border`]]: disabled && border,
                    [css[`${base}--disabled`]]: disabled,
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
    glossy: false,
    type: 'basic',
    size: 'small',
    variant: 'primary',
}
