import React, { InputHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, useState } from 'react';
import cn from 'clsx';
import { ICON_SIZE } from '../constants';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import './styles.scss';

export type IProps = {
    placeholder?: string,
    value?: string,
    inputProps?: InputHTMLAttributes<HTMLInputElement>,
    iconProps?: ButtonHTMLAttributes<HTMLButtonElement>,
    wrapperProps?: HTMLAttributes<HTMLDivElement>,
    password?: boolean,
    showText?: boolean,
    fluid?: boolean,
    radius?: 'square' | 'basic' | 'round',
    onChange?: (event: React.ChangeEvent) => void,
    onClick?: (event: React.MouseEvent) => void,
};

export const MUTInput = (props: IProps) => {
    const base = 'muk_input';

    const [visible, setVisible] = useState(false);

    const isPW = () => {
        if (!props.password || props.showText) {
            return 'text';
        }
        return visible ? 'text' : 'password';
    };

    const showPWText = () => {
        if (props.password && props.showText) {
            return true;
        }
        return visible;
    };

    return (
        <div
            {...props.wrapperProps}
            className={
                cn(
                    [base],
                    [`${base}--${props.radius}--radius`],
                    {
                        [`${base}--password`]: props.password,
                        [`${base}--${props.fluid}`]: props.fluid,
                    }
                )}>
            <input
                {...props.inputProps}
                placeholder={props.placeholder}
                type={isPW()}
                value={props.value}
                onChange={(event) => {
                    props.onChange && props.onChange(event);
                }}
            />
            {
                props.password && (
                    <i
                        {...props.iconProps}
                        onClick={
                            (event: React.MouseEvent) => {
                                setVisible(!visible);
                                props.onClick && props.onClick(event);
                            }
                        }>
                        {showPWText() ? (
                            <AiFillEye
                                style={{
                                    fontSize: ICON_SIZE,
                                }}
                            />
                        ) : (
                                <AiFillEyeInvisible
                                    style={{
                                        fontSize: ICON_SIZE,
                                    }}
                                />
                            )}
                    </i>
                )
            }
        </div >
    );
};


MUTInput.defaultProps = {
    placeholder: 'Insert Text',
    radius: 'basic',
    password: false,
    showText: false,
    fluid: false,
    wrapperProps: {},
    inputProps: {},
    iconProps: {},
};
