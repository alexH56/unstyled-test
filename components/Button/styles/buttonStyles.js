export const baseStyles = "inline-flex space-x-2 items-center align-center rounded-sm transition-colors"

export const buttonSizes = {
  sm: "text-sm px-4 py-1",
  md: "text-base px-6 py-1",
  lg: "text-lg px-8 py-1",
  xl: "text-2xl px-10 py-1.5"
};

export const buttonTypes = {
    primary: {
      filled:
        "justify-center border border-primary-900 bg-primary-900 text-white hover:text-primary-700 hover:bg-primary-200 hover:border-primary-500 dark:bg-primary-300 dark:text-light dark:hover:bg-primary-700 disabled:border-primary-900 disabled:bg-primary-900 disabled:text-white",
      ghost:
        "justify-center border text-primary-700 bg-transparent border-primary-500 hover:border-primary-900 hover:bg-primary-200 hover:text-primary-700 dark:text-light dark:border-primary-700 dark:hover:bg-primary-300 dark:hover:text-light disabled:text-primary-900 disabled:bg-transparent disabled:border-primary-900 dark:disabled:border-primary-100 dark:disabled:text-primary-100 dark:disabled:bg-transparent",
    },
    secondary: {
      filled:
        "justify-center border border-secondary-900 bg-secondary-900 text-white hover:text-secondary-700 hover:bg-secondary-200 hover:border-secondary-500 dark:bg-secondary-300 dark:text-light dark:hover:bg-secondary-700 disabled:border-secondary-900 disabled:bg-secondary-900 disabled:text-white",
      ghost:
        "justify-center border text-secondary-700 bg-transparent border-secondary-500 hover:border-secondary-900 hover:bg-secondary-200 hover:text-secondary-700 dark:text-light dark:border-secondary-700 dark:hover:bg-secondary-300 dark:hover:text-light disabled:text-secondary-900 disabled:bg-transparent disabled:border-secondary-900 dark:disabled:border-secondary-100 dark:disabled:text-secondary-100 dark:disabled:bg-transparent",
    },
    tertiary: {
      filled:
        "justify-center border border-tertiary-900 bg-tertiary-900 text-white hover:text-tertiary-700 hover:bg-tertiary-200 hover:border-tertiary-500 dark:bg-tertiary-300 dark:text-light dark:hover:bg-tertiary-700 disabled:border-tertiary-900 disabled:bg-tertiary-900 disabled:text-white",
      ghost:
        "justify-center border text-tertiary-700 bg-transparent border-tertiary-500 hover:border-tertiary-900 hover:bg-tertiary-200 hover:text-tertiary-700 dark:text-light dark:border-tertiary-700 dark:hover:bg-tertiary-300 dark:hover:text-light disabled:text-tertiary-900 disabled:bg-transparent disabled:border-tertiary-900 dark:disabled:border-tertiary-100 dark:disabled:text-tertiary-100 dark:disabled:bg-transparent",
    },
    dark: {
      filled:
        "justify-center border border-dark-900 bg-dark-900 text-white hover:text-dark-700 hover:bg-dark-200 hover:border-dark-500 dark:bg-dark-300 dark:text-light dark:hover:bg-dark-700 disabled:border-dark-900 disabled:bg-dark-900 disabled:text-white",
      ghost:
        "justify-center border text-dark-700 bg-transparent border-dark-500 hover:border-dark-900 hover:bg-dark-200 hover:text-dark-700 dark:text-light dark:border-dark-700 dark:hover:bg-dark-300 dark:hover:text-light disabled:text-dark-900 disabled:bg-transparent disabled:border-dark-900 dark:disabled:border-dark-100 dark:disabled:text-dark-100 dark:disabled:bg-transparent",
    },
    light: {
      filled:
        "justify-center border border-light-900 bg-light-900 text-white hover:text-light-700 hover:bg-light-200 hover:border-light-500 dark:bg-light-300 dark:text-light dark:hover:bg-light-700 disabled:border-light-900 disabled:bg-light-900 disabled:text-white",
      ghost:
        "justify-center border text-light-700 bg-transparent border-light-500 hover:border-light-900 hover:bg-light-200 hover:text-light-700 dark:text-light dark:border-light-700 dark:hover:bg-light-300 dark:hover:text-light disabled:text-light-900 disabled:bg-transparent disabled:border-light-900 dark:disabled:border-light-100 dark:disabled:text-light-100 dark:disabled:bg-transparent",
    },
    success: {
      filled:
        "justify-center border border-green-500 bg-green-500 text-white hover:text-green-500 hover:bg-opacity-30 hover:border-green-500 dark:bg-opacity-30 dark:hover:text-white dark:hover:bg-opacity-70 disabled:border-green-500 disabled:bg-green-500 disabled:text-white",
      ghost:
        "justify-center border text-green-500 bg-transparent border-green-500 hover:text-green-500 hover:bg-green-500 hover:bg-opacity-30 dark:text-white dark:hover:text-white disabled:text-green-500 disabled:bg-transparent disabled:border-green-500",
    },
    warning: {
      filled:
        "justify-center border border-yellow-500 bg-yellow-500 text-white hover:text-yellow-500 hover:bg-opacity-30 hover:border-yellow-500 dark:bg-opacity-30 dark:hover:text-white dark:hover:bg-opacity-70 disabled:border-yellow-500 disabled:bg-yellow-500 disabled:text-white",
      ghost:
        "justify-center border text-yellow-500 bg-transparent border-yellow-500 hover:text-yellow-500 hover:bg-yellow-500 hover:bg-opacity-30 dark:text-white dark:hover:text-white disabled:text-yellow-500 disabled:bg-transparent disabled:border-yellow-500",
    },
    danger: {
      filled:
        "justify-center border border-red-500 bg-red-500 text-white hover:text-red-500 hover:bg-opacity-30 hover:border-red-500 dark:bg-opacity-30 dark:hover:text-white dark:hover:bg-opacity-70 disabled:border-red-500 disabled:bg-red-500 disabled:text-white",
      ghost:
        "justify-center border text-red-500 bg-transparent border-red-500 hover:text-red-500 hover:bg-red-500 hover:bg-opacity-30 dark:text-white dark:hover:text-white disabled:text-red-500 disabled:bg-transparent disabled:border-red-500",
    },
    text: "hover:text-primary-900 hover:bg-primary-200 hover:bg-opacity-80 dark:border dark:border-transparent dark:text-light dark:hover:border-primary-700 disabled:text-primary-3000 disabled:bg-transparent dark:disabled:text-primary-400 dark:disabled:bg-transparent",
};