import React from 'react'
import { Input } from 'Components/Input'
import { actions } from '@storybook/addon-actions'

export default {
    title: 'Input',
    component: Input,
    argTypes: {
        password: { control: 'boolean' },
    },
}

// const InputTemplate = (args) => (
//     <Input {...actions((event) => ({ onChange: `${event} eee` }))} {...args} />
// )

export const standard = () => <Input {...actions('onChange')} />
