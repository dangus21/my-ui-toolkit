import React, { useState } from 'react';
import cn from 'class-names';
import { ICON_SIZE } from '../constants';
import { VisibilityOffOutlined, VisibilityOutlined } from '@material-ui/icons';
import styles from './styles.module.css';

export interface IProps {
    change?: (event: React.ChangeEvent<HTMLInputElement>) => any,
    click?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => any,
    placeholder?: string,
    value?: string,
    inputProps?: any,
    iconProps?: any,
    wrapperProps?: any,
    password?: boolean,
    showText?: boolean,
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

    return (
        <div
            className={
                cn(
                    styles[base],
                    styles[`${base}--${props.radius}--radius`],
                    {
                        [styles[`${base}--password`]]: props.password,
                    }
                )}
            {...wrapperProps}>
            <input
                placeholder={props.placeholder}
                type={isPW()}
                value={props.value}
                onChange={(event) => {
                    inputOnChange && inputOnChange(event);
                    props.change && props.change(event);
                }}
                {...restInputProps}
            />
            {
                props.password && (
                    <i
                        onClick={
                            (event) => {
                                setVisible(!visible);
                                props.click && props.click(event);
                                iconOnClick && iconOnClick(event);
                            }
                        }
                        {...restIconProps}>
                        {showPWText() ? (
                            <VisibilityOutlined
                                style={{
                                    fontSize: ICON_SIZE,
                                }}
                            />
                        ) : (
                                <VisibilityOffOutlined
                                    style={{
                                        fontSize: ICON_SIZE,
                                    }}
                                />
                            )}
                    </i>
                )}
        </div>
    );
};


MUTInput.defaultProps = {
    placeholder: 'Insert Text',
    radius: 'basic',
    password: false,
    showText: false,
    wrapperProps: {},
    inputProps: {},
    iconProps: {},
};
