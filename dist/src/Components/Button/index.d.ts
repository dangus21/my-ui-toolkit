import React, { ButtonHTMLAttributes } from 'react';
export declare type IProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode;
    pointer?: boolean;
    disabled?: boolean;
    border?: boolean;
    type?: 'square' | 'basic' | 'round';
    size?: 'small' | 'medium' | 'large' | 'extra' | 'jumbo';
    variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warn';
    text?: 'Click';
};
export declare const MUTButton: {
    (props: IProps): JSX.Element;
    defaultProps: {
        text: string;
        pointer: boolean;
        disabled: boolean;
        border: boolean;
        type: string;
        size: string;
        variant: string;
    };
};
