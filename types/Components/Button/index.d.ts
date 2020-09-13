import React from 'react';
export interface IProps {
    children?: React.ReactNode;
    pointer?: boolean;
    disabled?: boolean;
    border?: boolean;
    type?: 'square' | 'basic' | 'round';
    size?: 'small' | 'medium' | 'large' | 'extra' | 'jumbo';
    variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warn';
    text?: 'Click';
    onClick?: (event: React.MouseEvent) => void;
}
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
