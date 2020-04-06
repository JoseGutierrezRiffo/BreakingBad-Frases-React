import React from "react";
import styled from "@emotion/styled";

const ContenedorFrase = styled.div`
  padding: 2.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 1000px;

  @media (min-width: 992px) {
    margin-top: 13rem;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::before {
      content: open-quote;
      font-size: 100px;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 1rem;
  }
`;

const Frase = ({ frase }) => {
  return (
    <ContenedorFrase>
      <h1>{frase.quote}</h1>
      <p>{frase.author}</p>
    </ContenedorFrase>
  );
};

export default Frase;
