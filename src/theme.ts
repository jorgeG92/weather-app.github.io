import { createTheme, responsiveFontSizes } from '@mui/material';

const defaultTheme = createTheme();
// Using responsiveFontSizes MUI handles de fontSize of variants
// used on component Typography
const weatherAppTheme = responsiveFontSizes(defaultTheme, {
  variants: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2'],
});

export default weatherAppTheme;
