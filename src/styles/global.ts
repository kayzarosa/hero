import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-background-menu: #FFFFFF;
    --color-background: #E5E5E5;
    --color-border: #E5E5E5;
    --color-title-in-primary: #fffafa;
    --background-personagem-lista: #fffafa;
    --color-text-titulo-personagem: #555555;
    --background-imagem-personagem: #0c070e;
    --color-text-descricao-personagem: #555555;
    --color-text-series: #555555;
    --color-background-second: #FFFFFF;
    --color-title-in-segundary: #232129;
    --color-background-input: #232129;
    --color-background-input-segundary: #fffafa;
    --color-text-input: #8E8E8E;
    --color-text-header: #8E8E8E;
    --color-linha-tabela-even: 
    --color-text-input-segundary: #000000
    --color-image-input: #ff9000;
    --color-border-focus-input: #ff9000;
    --color-placeholder-input: #f4ede8;
    --color-placeholder-input-segundary: #232129;
    --color-span: #FF7D00;
    --color-background-tooltip: #ff9000;
    --color-border-tooltip: #ff9000;
    --color-text-menu: #fffafa;
    --color-button: #ff9000;
    --color-button-desabilitado: #ff90007a;
    --background-pagination: #F5F5F5;
    --color-button-active: #FFFFFF;
    --background-active: #167ABC;
    --color-linha-tabela-even: #fff;
    --color-linha-tabela-odd: #eee;

    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    color: var(--color-title-in-primary);
    background: var(--color-background);
    -webkit-flow-smoothing: antialiased;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, input, button, textarea, select {
    font-family: 'PT Sans Caption', serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
