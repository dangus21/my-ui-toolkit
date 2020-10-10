import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MUTButton, IProps } from '../Components/Button';
import { MUTSpacerMapper } from '../Components/Spacer';

export default {
    title: 'Components/Button',
    component: MUTButton,

} as Meta;

const ButtonTemplate: Story<IProps> = (args) => <MUTButton {...args} />


export const primary = ButtonTemplate.bind({});
primary.args = {
    variant: "primary"
};

export const secondary = ButtonTemplate.bind({});
secondary.args = {
    variant: "secondary"
};

export const success = ButtonTemplate.bind({});
success.args = {
    variant: "success"
};

export const error = ButtonTemplate.bind({});
error.args = {
    variant: "error"
};

export const warning = ButtonTemplate.bind({});
warning.args = {
    variant: "warn"
};

const spaceSize = 5;


export const border = () => (
    <MUTSpacerMapper width={spaceSize}>
        <MUTButton border variant="primary"/>
        <MUTButton border variant="secondary"/>
        <MUTButton border variant="success"/>
        <MUTButton border variant="error"/>
        <MUTButton border variant="warn"/>
        <MUTButton border disabled/>
    </MUTSpacerMapper>
)

export const noBorder = () => (
    <MUTSpacerMapper width={spaceSize}>
        <MUTButton variant="primary"/>
        <MUTButton variant="secondary"/>
        <MUTButton variant="success"/>
        <MUTButton variant="error"/>
        <MUTButton variant="warn"/>
        <MUTButton disabled />
    </MUTSpacerMapper>
)
