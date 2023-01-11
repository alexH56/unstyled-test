import React from 'react'
import Button from './Button.jsx'
import '../../src/index.css'

export default {
    title: 'Untitled UI/Atoms/Button',
    component: Button,
    argTypes: {
        type: {
            options: [
                'primary',
                'secondary',
                'tertiary',
                'dark',
                'light',
                'success',
                'warning',
                'danger',
                'text',
            ],
            control: { type: 'select' },
        },
        size: {
            options: ['sm', 'md', 'lg', 'xl'],
            control: { type: 'radio' },
        },
        className: {
            control: { type: 'text' },
        },
        primary: {
            table: { disable: true },
        },
        secondary: {
            table: { disable: true },
        },
        tertiary: {
            table: { disable: true },
        },
        dark: {
            table: { disable: true },
        },
        light: {
            table: { disable: true },
        },
        success: {
            table: { disable: true },
        },
        warning: {
            table: { disable: true },
        },
        danger: {
            table: { disable: true },
        },
        text: {
            table: { disable: true },
        },
        sm: {
            table: { disable: true },
        },
        md: {
            table: { disable: true },
        },
        lg: {
            table: { disable: true },
        },
        xl: {
            table: { disable: true },
        },
        baseStyles: {
            table: { disable: true },
        },
        onClick: {
            action: 'clicked',
            table: { disable: true },
        },
    },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
    children: 'Primary',
    ghost: false,
    size: 'md',
    disabled: false,
    processing: false,
}

export const Alt = Template.bind({})
Alt.args = {
    type: 'primary',
    children: 'Alt',
    ghost: true,
    disabled: false,
    processing: false,
}

export const CTA = Template.bind({})
CTA.args = {
    type: 'primary',
    children: 'CTA',
    size: 'xl',
    ghost: false,
    processing: false,
    disabled: false,
}

export const Loading = Template.bind({})
Loading.args = {
    type: 'primary',
    ghost: false,
    processing: true,
    disabled: false,
}

export const Success = Template.bind({})
Success.args = {
    type: 'success',
    children: 'Success!',
    ghost: false,
    processing: false,
    disabled: false,
}

export const Warning = Template.bind({})
Warning.args = {
    type: 'warning',
    children: 'Warning!',
    ghost: false,
    processing: false,
    disabled: false,
}

export const Danger = Template.bind({})
Danger.args = {
    type: 'danger',
    children: 'Danger!',
    ghost: false,
    processing: false,
    disabled: false,
}
