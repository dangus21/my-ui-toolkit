import { ICON_SIZE } from 'Components/constants';
import { VisibilityOffOutlined, VisibilityOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import cn from 'class-names';
import types from 'prop-types';
import styles from './styles.module.css';

const propTypes = {
    change: types.func,
    click: types.func,
    placeholder: types.string,
    value: types.string,
    inputProps: types.object,
    iconProps: types.object,
    wrapperProps: types.object,
    password: types.bool,
    showText: types.bool,
    radius: types.oneOf(['square', 'basic', 'round']),
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

/**
 *
 * @param {*} props
 * @param {Function} props.change
 * @param {Function} props.click
 * @param {String} props.placeholder
 * @param {String} props.value
 * @param {Object} props.inputProps
 * @param {Object} props.iconProps
 * @param {Object} props.wrapperProps
 * @param {Boolean} props.wrapperProps
 * @param {Boolean} props.password
 * @param {Boolean} props.showText
 * @param {String} props.radius - 'square', 'basic', 'round'
 */

const base = 'muk_input';

export const MUTInput = (props) => {
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
    console.log(isPW());
    return (
        <div
            className={cn(
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
            {props.password && (
                <i
                    onClick={(event) => {
                        setVisible(!visible);
                        props.click && props.click(event);
                        iconOnClick && iconOnClick(event);
                    }}
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

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
