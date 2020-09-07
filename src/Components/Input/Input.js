import React, { useState } from 'react'
import types from 'prop-types'
import cn from 'class-names'
import { VisibilityOutlined, VisibilityOffOutlined } from '@material-ui/icons'
import { ICON_SIZE } from 'Components/constants'
import './styles.scss'

const propTypes = {
    iconProps: types.object,
    inputProps: types.object,
    wrapperProps: types.object,
    password: types.bool,
    /** { square | basic (default) | round } */
    radius: types.oneOf(['square', 'basic', 'round']),
}

const defaultProps = {
    password: false,
    radius: 'basic',
}

const Input = (props) => {
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
                <input type={isPW()} {...props.inputProps} />
                {props.password && (
                    <i
                        {...props.iconProps}
                        onClick={() => setVisible(!visible)}
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
