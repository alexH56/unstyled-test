import PropTypes from 'prop-types';

export const buttonPropTypes = {
    // Type/color of button
    type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'dark', 'light', 'success', 'warning', 'danger', 'text']),
    // How large should the button be?
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    // Filled or ghost
    ghost: PropTypes.bool,    
    // if true, button has loading animation
    processing: PropTypes.bool,
    // if true, button is disabled and opacity is reduced
    disabled: PropTypes.bool,
    // Optional, additional styling
    className: PropTypes.string,
    // Optional click handler  
    onClick: PropTypes.func,
    // boolean options available for type:
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    tertiary: PropTypes.bool,
    dark: PropTypes.bool,
    light: PropTypes.bool,
    success: PropTypes.bool,
    warning: PropTypes.bool,
    danger: PropTypes.bool,
    text: PropTypes.bool,
    // boolean options available for size:
    sm: PropTypes.bool,
    md: PropTypes.bool,
    lg: PropTypes.bool,
    xl: PropTypes.bool
  };