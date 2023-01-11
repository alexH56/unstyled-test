import React from 'react'
import cx from '../../utils/classes'
import { buttonPropTypes } from './typeValidation'
import { baseStyles, buttonSizes, buttonTypes } from './styles/buttonStyles'

export default function Button({
    primary = false,
    secondary = false,
    tertiary = false,
    dark = false,
    light = false,
    success = false,
    warning = false,
    danger = false,
    text = false,
    ghost = false,
    sm = false,
    md = false,
    lg = false,
    xl = false,
    iconLeft,
    iconRight,
    onClick,
    processing,
    disabled,
    className,
    children = 'Hello',
    type,
    size,
}) {
    const types = {
        primary,
        secondary,
        tertiary,
        dark,
        light,
        success,
        warning,
        danger,
        text,
    }
    const givenType =
        Object.keys(types).filter((t) => types[t])[0] || type || 'primary'

    const sizes = { sm, md, lg, xl }
    const givenSize =
        Object.keys(sizes).filter((t) => sizes[t])[0] || size || 'sm'

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={cx(
                baseStyles,
                buttonSizes[givenSize],
                givenType === 'text'
                    ? buttonTypes.text
                    : buttonTypes[givenType][!ghost ? 'filled' : 'ghost'],
                disabled ? 'disabled:opacity-40 cursor-not-allowed' : '',
                className
            )}
        >
            {processing ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 animate-pulse"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                </svg>
            ) : (
                <>
                    {iconLeft && <span>{iconLeft}</span>}
                    <span>{children}</span>
                    {iconRight && <span>{iconRight}</span>}
                </>
            )}
        </button>
    )
}

Button.propTypes = {
    ...buttonPropTypes,
}
