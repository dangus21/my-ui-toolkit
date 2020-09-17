import { InputHTMLAttributes } from 'react';
export declare type IProps = InputHTMLAttributes<HTMLInputElement> & {
    placeholder?: string;
    value?: string;
    inputProps?: any;
    iconProps?: any;
    wrapperProps?: any;
    password?: boolean;
    showText?: boolean;
    fluid?: boolean;
    radius?: 'square' | 'basic' | 'round';
};
export declare const MUTInput: {
    (props: IProps): JSX.Element;
    defaultProps: {
        placeholder: string;
        radius: string;
        password: boolean;
        showText: boolean;
        fluid: boolean;
        wrapperProps: {};
        inputProps: {};
        iconProps: {};
    };
};
