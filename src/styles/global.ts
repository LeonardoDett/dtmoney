import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
:root {
  --background: #E5E5E5;
  --green: #33cc95;
  --red: #e52e4d;
  --blue: #5429cc;
  --blue-light: #6933ff;
  --text-title: #363F5F;
  --text-body: #969cb3;
  --shape: #ffffff;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// font-size: 16px desktop 
html{
  @media (max-width: 1080px){
    font-size: 93.75%; //15px
  }

  @media (max-width: 720px){
    font-size: 87.15%; //14px
  }
}
body, input, textarea, button{
  font-family: "Poppins", sans-serif;
  font-weight: 400;

}

h1,h2,h3,h4,h5,h6, strong {
  font-weight: 500;
}

body{
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

`;