/* eslint-disable react/prop-types */
import React from 'react'
import { actions } from '@storybook/addon-actions'
import { MUKButton } from 'Components'

export default {
    title: 'Button',
    component: MUKButton,
    argTypes: {},
}

const InputTemplate = ({ wrapperProps, inputProps, iconProps, ...args }) => (
    <MUKButton
        wrapperProps={wrapperProps}
        inputProps={inputProps}
        iconProps={iconProps}
        {...actions('onClick')}
        {...args}
    />
)

export const standard = InputTemplate.bind({})
