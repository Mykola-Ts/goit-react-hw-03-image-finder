import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
/* ---------------- FONTS ---------------- */

/* ---------------- DM Sans Regular ---------------- */
@font-face {
  font-family: 'DMSansRegular';
  src: url('../fonts/DMSansRegular.eot');
  src: url('../fonts/DMSansRegular.eot') format('embedded-opentype'),
    url('../fonts/DMSansRegular.woff2') format('woff2'),
    url('../fonts/DMSansRegular.woff') format('woff'),
    url('../fonts/DMSansRegular.ttf') format('truetype'),
    url('../fonts/DMSansRegular.svg#DMSansRegular') format('svg');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* ---------------- DM Sans Medium ---------------- */
@font-face {
  font-family: 'DMSansMedium';
  src: url('../fonts/DMSansMedium.eot');
  src: url('../fonts/DMSansMedium.eot') format('embedded-opentype'),
    url('../fonts/DMSansMedium.woff2') format('woff2'),
    url('../fonts/DMSansMedium.woff') format('woff'),
    url('../fonts/DMSansMedium.ttf') format('truetype'),
    url('../fonts/DMSansMedium.svg#DMSansMedium') format('svg');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

/* ---------------- DM Sans Bold ---------------- */
@font-face {
  font-family: 'DMSansBold';
  src: url('../fonts/DMSansBold.eot');
  src: url('../fonts/DMSansBold.eot') format('embedded-opentype'),
    url('../fonts/DMSansBold.woff2') format('woff2'),
    url('../fonts/DMSansBold.woff') format('woff'),
    url('../fonts/DMSansBold.ttf') format('truetype'),
    url('../fonts/DMSansBold.svg#DMSansBold') format('svg');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

:root {
  --font-family: 'DM Sans', sans-serif;

  --background-color: rgb(228, 228, 228);
  --text-black-color: #111;
  --primary-color: rgb(63, 178, 255);
  --primary-color-with-transparency: rgba(63, 178, 255, 0.8);
  --primary-color-transparent: rgba(63, 178, 255, 0.2);
  --white-color: #fff;
  --white-color-with-transparency: rgba(255, 255, 255, 0.8);
  --modal-backdrop-color: rgba(17, 17, 17, 0.6);

  --box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  --transition-duration: 250ms;
  --transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

body {
  margin: 0;

  font-family: var(--font-family);
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: -0.32px;

  color: var(--text-black-color);
  background-color: var(--background-color);
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}

ul {
  margin: 0;
  padding: 0;

  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  object-fit: cover;
}

button {
  cursor: pointer;

  outline: transparent;
}
`;
