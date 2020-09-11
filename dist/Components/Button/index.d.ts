import React from 'react';
export interface IProps {
    children?: React.ReactNode;
    pointer?: boolean;
    disabled?: boolean;
    border?: boolean;
    type?: 'square' | 'basic' | 'round';
    size?: 'small' | 'medium' | 'large' | 'extra' | 'jumbo';
    variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warn';
}
export declare const MUTButton: {
    (props: IProps): JSX.Element;
    defaultProps: {
        children: string;
        pointer: boolean;
        disabled: boolean;
        border: boolean;
        type: string;
        size: string;
        variant: string;
    };
};