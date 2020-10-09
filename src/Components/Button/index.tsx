import React, { ButtonHTMLAttributes } from 'react';
import cn from 'clsx';
import './styles.scss';

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
                base,
                `${base}--type--${type}`,
                `${base}--size--${size}`,
                `${base}--variant--${variant}`,
                {
                    [`${base}--pointer`]: !disabled && pointer,
                    [`${base}--border`]: !disabled && border,
                    [`${base}--disabled--border`]: disabled && border,
                    [`${base}--disabled`]: disabled,
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
    size: 'small',
    variant: 'primary',
}
