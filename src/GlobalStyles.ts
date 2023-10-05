import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }
  body{
    font-family: 'Manrope', sans-serif;
    font-style: normal;
   
  }
  ::-webkit-scrollbar{
    width:10px;
  }
::-webkit-scrollbar-track{
  background: #000;
}

::-webkit-scrollbar-thumb{
  background: #fbaf85;
  border-radius: 50%;
}

  .GlobalButton {
    background-color: #d87d4a;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    width: fit-content;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 0 1.875rem;
    border: none;
    cursor: pointer;
   height:5rem;
    &:hover {
      background-color: #fbaf85;
    }
  }
  .ProductDescription{
    color: #000;
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
    opacity: 0.5;

  }
  .Title{
  color: #000;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  @media screen and (min-width: 700px) {
   max-width: 50%;
   margin:0 auto;
  }
  }
  .News{
    color: #D87D4A;
text-align: center;
font-size: 14px;
font-weight: 400;
letter-spacing: 10px;
text-transform: uppercase;
  }
`;

export default GlobalStyle;
