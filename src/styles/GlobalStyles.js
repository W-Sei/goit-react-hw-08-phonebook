import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import image from '../images/button.png';
import imageBgi from '../images/form.png';

export const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: -apple-system, 'Berkshire Swash', cursive,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: 14px;
  line-height: 1.71;
  letter-spacing: 0.03em;
  background-image: url(${imageBgi});
  background-size: cover;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

а {
  text-decoration: none;
  color: inherit;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}

h1 {
font-size: ${({ theme }) => theme.fontSizes.xxl};
}

h2 {
font-size: ${({ theme }) => theme.fontSizes.large};
}

h1, h2 {
  line-height: 1.22;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  background-color: ${({ theme }) => theme.colors.backgroundAndBorderColor};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  padding: ${({ theme }) => theme.spacing(2)};
  text-transform: uppercase;
}

button {
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  background-image: url(${image});
  cursor: pointer;
  }
`;
