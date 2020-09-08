import './styles.scss';
import { ICON_SIZE } from 'Components/constants';
import {
    VisibilityOffOutlined,
    VisibilityOutlined,
} from '@material-ui/icons';
import React, { useState } from 'react';
import cn from 'class-names';
import types from 'prop-types';

const propTypes = {
    change: types.func,
    click: types.func,
    placeholder: types.string,
    inputProps: types.object,
    iconProps: types.object,
    wrapperProps: types.object,
    password: types.bool,
    showText: types.bool,
    value: types.string,
    radius: types.oneOf(['square', 'round']),
};

const defaultProps = {
    placeholder: 'Insert Text',
    radius: 'basic',
    password: false,
    showText: false,
    wrapperProps: {},
    inputProps: {},
    iconProps: {},
};

const base = 'muk_input';

export const Input = (props) => {
    const {
        inputProps: { inputOnChange, ...restInputProps },
        iconProps: { iconOnClick, ...restIconProps },
    } = props;

    const [visible, setVisible] = useState(false);

    const isPW = () => {
        if (!props.password) {
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
            className={cn(
                base,
                `${base}--${props.radius}_radius`,
                {
                    [`${base}--password`]: props.password,
                }
            )}
            {...props.wrapperProps}>
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
            {props.password && (
                <i
                    {...restIconProps}
                    onClick={(event) => {
                        setVisible(!visible);
                        props.click && props.click(event);
                        iconOnClick && iconOnClick(event);
                    }}>
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

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
