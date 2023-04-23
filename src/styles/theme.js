export const theme = Object.freeze({
  colors: {
    backgroundAndBorderColor: '#C9A9A6',
    primaryTextColor: '#811331',
    secondaryTextColor: '#770737',

    buttonTextColor: '#2C2B2B',
    buttonBackgroundColorAccent: '#236B0B',

    accentColor: '#E0BFB8',
    errorColor: '#FA8072',

    borderInputColor: '#770737',
    backgroundLoaderColor: 'rgba(243, 207, 198, 0.3)',
  },
  boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
  transition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',

  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '22px',
    xl: '30px',
    xxl: '34px',
    xxxl: '42px',
  },

  breakpoints: {
    xs: '320px',
    s: '480px',
    m: '768px',
    l: '1200px',
  },

  spacing: value => `${4 * value}px`,
});
