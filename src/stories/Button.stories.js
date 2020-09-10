/* eslint-disable react/prop-types */
import { MUKButton } from 'index';
import React from 'react';

export default {
    title: 'Button',
    component: MUKButton,
    argTypes: {
        children: { control: { disable: false } },
        pointer: { control: { disable: false } },
        border: { control: { disable: false } },
    },
};

const ButtonTemplate = (args) => (
    <MUKButton {...args} />
);

export const button = ButtonTemplate.bind({});
