/// <reference types="react" />
declare const _default: {
    MUTButton: {
        (props: import("./Components/Button").IProps): JSX.Element;
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
    MUTInput: {
        (props: import("./Components/Input").IProps): JSX.Element;
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
};
export default _default;
