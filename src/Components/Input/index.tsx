import React, { InputHTMLAttributes, useState } from 'react';
import cn from 'class-names';
import { ICON_SIZE } from '../constants';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import styles from './styles.module.scss';

export type IProps = InputHTMLAttributes<HTMLInputElement> & {
    placeholder?: string,
    value?: string,
    inputProps?: any,
    iconProps?: any,
    wrapperProps?: any,
    password?: boolean,
    showText?: boolean,
    fluid?: boolean,
    radius?: 'square' | 'basic' | 'round',
};

export const MUTInput = (props: IProps) => {
    const base = 'muk_input';
    const {
        wrapperProps,
        inputProps: { inputOnChange, ...restInputProps },
        iconProps: { iconOnClick, ...restIconProps },
    } = props;

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
    console.log('LOG: MUTInput -> props', props);

    return (
        <div
            className={
                cn(
                    styles[base],
                    styles[`${base}--${props.radius}--radius`],
                    {
                        [styles[`${base}--password`]]: props.password,
                        [styles[`${base}--${props.fluid}`]]: props.fluid,
                    }
                )}
            {...wrapperProps}>
            <input
                placeholder={props.placeholder}
                type={isPW()}
                value={props.value}
                onChange={(event) => {
                    inputOnChange && inputOnChange(event);
                    props.onChange && props.onChange(event);
                }}
                {...restInputProps}
            />
            {
                props.password && (
                    <i
                        onClick={
                            (event: any) => {
                                setVisible(!visible);
                                props.onClick && props.onClick(event);
                                iconOnClick && iconOnClick(event);
                            }
                        }
                        {...restIconProps}>
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
