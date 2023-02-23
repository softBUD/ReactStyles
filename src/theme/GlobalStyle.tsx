import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
  }

  div, p, span, strong, b, em, iframe, pre, h1, h2, h3, h4, h5, h6, img, dl, dt, dd, fieldset, form, legend, label, table, caption, thead, tbody, tfoot, tr, th, td, ul, ol, li, a, input, select, textarea {
    margin: 0px;
    padding: 0px; 
    border: 0 none; 
    padding-inline: 0px;
    margin-block: 0px;
    }
`

export default GlobalStyle
