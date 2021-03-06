import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/apartment.jpg";

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
    }
    body{
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
    }

    *{
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: Fascinate Inline, Haettenschweiler, "Arial Narrow Bold",
      sans-serif;
    /* background-image: linear-gradient(180deg, #fff, #87f1ff); */
    background-size: 100%;
    background-clip: text;
    --webkit-background-clip: text;
    --webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadown(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
    color: #faeecd;
  }

  .card {
    padding: 50px;
    background: linear-gradient(180deg, aliceblue, transparent);
    margin: 50px 0;
  }
`;
