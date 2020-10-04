import React from 'react';
import { MUTInput } from '../Components/Input';
import { MUTButton } from '../Components/Button';
import { actions } from '@storybook/addon-actions';
import { Meta } from '@storybook/react/types-6-0';
import { MUTInput as DistInput } from '../Components/Input/index'

export default {
    title: 'Components/Input',
    component: MUTInput,
    argTypes: {
        value: { control: { disable: false } },
        placeholder: {
            control: { disable: false },
        },
        password: {
            control: { disabled: false },
        },
        showText: { control: { disable: false } },
        radius: { control: { disable: false } },
        inputProps: {
            control: { disable: false },
        },
        iconProps: {
            control: { disable: false },
        },
        wrapperProps: {
            control: { disable: false },
        },
        click: { control: { disable: true } },
        change: { control: { disable: true } },
    },
} as Meta;

export const Dist = (args) => <DistInput {...args} />


const InputTemplate = ({ el, ...args }) => (
    <div style={{display: 'flex'}}>
        <MUTButton />
        <MUTInput
            {...actions('onChange')}
            {...args}
        />
    </div>
);

export const standard = InputTemplate.bind({});

export const withWrapperProps = InputTemplate.bind({});
withWrapperProps.args = {
    wrapperProps: {
        style: { outline: '5px solid red' },
    },
};

export const withPassword = InputTemplate.bind({});
withPassword.args = {
    password: true,
    value: 'password text',
};
