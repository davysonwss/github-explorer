import { createGlobalStyle } from "styled-components";

import githubBackground from "../assets/images/github-background.svg";

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --white: #fff;
      --gray-arrow: #C9C9D4;
      --gray-lgt: #F5F5FA;
      --gray-med: #A8A8B3;
      --gray-med-2: #737380;
      --gray-stg: #6C6C80;
      --green: #04D361;
      --red-error: #c53030;
      --black-lgt: #3D3D4D;
      --black-med: #3A3A3A;
    }

    body {
      -webkit-font-smoothing: antialiased;
      background: var(--gray-lgt) url(${githubBackground}) no-repeat 70% top;
    }

    body, button, input {
      font: 16px "Roboto", Arial, sans-serif;
    }

    button {
      cursor: pointer;
    }

    #root {
      width: 90%;
      max-width: 960px;
      margin: 0 auto;
      padding: 40px 0;
    }
    
`;
