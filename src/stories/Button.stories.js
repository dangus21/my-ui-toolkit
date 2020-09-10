/* eslint-disable react/prop-types */
import { MUKButton } from 'index';
import React from 'react';

export default {
    title: 'Button',
    component: MUKButton,
    argTypes: {
        children: { control: { disable: false } },
        pointer: { control: { disable: false } },
        disabled: { control: { disable: false } },
        border: { control: { disable: false } },
        type: { control: { disable: false } },
        size: { control: { disable: false } },
        variant: { control: { disable: false } },
    },
};

const ButtonTemplate = (args) => <MUKButton {...args} />;

export const primary = ButtonTemplate.bind({});
primary.args = {
    variant: 'primary',
};
export const secondary = ButtonTemplate.bind({});
secondary.args = {
    variant: 'secondary',
};
export const success = ButtonTemplate.bind({});
success.args = {
    variant: 'success',
};
export const error = ButtonTemplate.bind({});
error.args = {
    variant: 'error',
};
export const warning = ButtonTemplate.bind({});
warning.args = {
    variant: 'warn',
};
