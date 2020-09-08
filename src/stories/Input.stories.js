/* eslint-disable react/prop-types */
import { MUKInput } from 'Components';
import { actions } from '@storybook/addon-actions';
import React from 'react';

export default {
    title: 'Input',
    component: MUKInput,
    argTypes: {
        value: { control: { disable: true } },
        placeholder: { control: { disable: false } },
        password: { control: { disabled: false } },
        showText: { control: { disable: false } },
        radius: { control: { disable: false } },
        inputProps: { control: { disable: false } },
        iconProps: { control: { disable: false } },
        wrapperProps: { control: { disable: false } },
        click: { control: { disable: true } },
        change: { control: { disable: true } },
    },
};

const InputTemplate = ({
    wrapperProps,
    inputProps,
    iconProps,
    ...args
}) => (
    <MUKInput
        wrapperProps={wrapperProps}
        inputProps={inputProps}
        iconProps={iconProps}
        {...actions('onChange')}
        {...args}
    />
);

export const standard = InputTemplate.bind({});

export const withWrapperProps = InputTemplate.bind({});
withWrapperProps.args = {
    wrapperProps: { style: { outline: '5px solid red' } },
};

export const withPassword = InputTemplate.bind({});
withPassword.args = {
    password: true,
    value: 'password text',
};
