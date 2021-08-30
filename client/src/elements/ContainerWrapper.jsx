import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 500px;
  max-width: 500px;
  min-width: 250px;
  background: #303841;
  background-size: 25px 25px;
  box-shadow: 4px 3px 7px 2px #00000040;
  padding: 1rem;
  box-sizing: border-box;
  @media (max-width: 490px) {
    max-width: 25rem;
  }
  @media (max-width: 427px) {
    max-width: 22rem;
  }
  @media (max-width: 384px) {
    max-width: 20rem;
  }
  @media (max-width: 344px) {
    max-width: 18rem;
  }
  @media (max-width: 304px) {
    max-width: 16rem;
  }
  @media (max-width: 304px) {
    max-width: 14rem;
  }
  & h1 {
    font-family: 'Permanent Marker', cursive;
    color: #f6c90e;
  }
`;

const ContainerWrapper = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default ContainerWrapper;
