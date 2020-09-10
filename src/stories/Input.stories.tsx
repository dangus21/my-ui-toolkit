// import React from 'react';
// import { MUTInput } from 'Components/Input';
// import { actions } from '@storybook/addon-actions';

// export default {
//     title: 'Input',
//     component: MUTInput,
//     argTypes: {
//         value: { control: { disable: false } },
//         placeholder: {
//             control: { disable: false },
//         },
//         password: {
//             control: { disabled: false },
//         },
//         showText: { control: { disable: false } },
//         radius: { control: { disable: false } },
//         inputProps: {
//             control: { disable: false },
//         },
//         iconProps: {
//             control: { disable: false },
//         },
//         wrapperProps: {
//             control: { disable: false },
//         },
//         click: { control: { disable: true } },
//         change: { control: { disable: true } },
//     },
// };

// const InputTemplate = ({ wrapperProps, inputProps, iconProps, ...args }) => (
//     <MUTInput
//         wrapperProps={wrapperProps}
//         inputProps={inputProps}
//         iconProps={iconProps}
//         {...actions('onChange')}
//         {...args}
//     />
// );

// export const standard = InputTemplate.bind({});

// export const withWrapperProps = InputTemplate.bind({});
// withWrapperProps.args = {
//     wrapperProps: {
//         style: { outline: '5px solid red' },
//     },
// };

// export const withPassword = InputTemplate.bind({});
// withPassword.args = {
//     password: true,
//     value: 'password text',
// };
