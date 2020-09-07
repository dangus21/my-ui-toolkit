import React, { useState } from 'react'
import types from 'prop-types'
import cn from 'class-names'
import { VisibilityOutlined, VisibilityOffOutlined } from '@material-ui/icons'
import { ICON_SIZE } from 'Components/constants'
import './styles.scss'

const propTypes = {
    onChange: types.func,
    placeholder: types.string,
    inputProps: types.object,
    iconProps: types.object,
    wrapperProps: types.object,
    password: types.bool,
    /** { square | basic (default) | round } */
    radius: types.oneOf(['square', 'basic', 'round']),
}

const defaultProps = {
    placeholder: 'Insert Text',
    password: false,
    radius: 'basic',
    wrapperProps: {},
    inputProps: {},
    iconProps: {},
}

const Input = (props) => {
    const {
        inputProps: { inputOnChange, ...restInputProps },
        iconProps: { iconOnClick, ...restIconProps },
    } = props

    const [visible, setVisible] = useState(false)
    const isPW = () => {
        if (!props.password) {
            return 'text'
        }
        return visible ? 'text' : 'password'
    }

    return (
        <div className="muk_input_wrapper" {...props.wrapperProps}>
            <div
                className={cn(
                    'muk_input_container',
                    `muk_input_${props.radius}_radius`,
                    {
                        muk_input_password: props.password,
                    }
                )}
            >
                <input
                    placeholder={props.placeholder}
                    type={isPW()}
                    onChange={(event) => {
                        inputOnChange && inputOnChange(event)
                        props.onChange && props.onChange(event)
                    }}
                    {...restInputProps}
                />
                {props.password && (
                    <i
                        {...restIconProps}
                        onClick={(event) => {
                            setVisible(!visible)
                            iconOnClick && iconOnClick(event)
                        }}
                    >
                        {visible ? (
                            <VisibilityOutlined
                                style={{ fontSize: ICON_SIZE }}
                            />
                        ) : (
                            <VisibilityOffOutlined
                                style={{ fontSize: ICON_SIZE }}
                            />
                        )}
                    </i>
                )}
            </div>
        </div>
    )
}

Input.propTypes = propTypes
Input.defaultProps = defaultProps

export default Input
