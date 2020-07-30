import styled from "styled-components";
import React from "react";

function Carregando(props) {
  return (
    <ContainerLoading>
      <Loading>
        <Dot />
        <Dot />
        <Dot />
      </Loading>
      <br />
      <b style={{ color: props.Cor }}>Carregando</b>
    </ContainerLoading>
  );
}

export default Carregando;

export const ContainerLoading = styled.div`
  display: flex;
  padding: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.div`
  width: 16em;
  height: 8em;
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
  }

  &::before {
    width: inherit;
    height: 0.2em;
    background-color: var(--primary);
  }

  &::after {
    box-sizing: border-box;
    width: 50%;
    height: inherit;
    border: 0.2em solid var(--primary);
    border-radius: 50%;
    left: 25%;
  }
`;

export const Dot = styled.span`
  position: absolute;
  width: 5%;
  height: 10%;
  background-color: var(--primary);
  border-radius: 50%;
  bottom: 0.2em;
  left: -5%;
  animation: 2s linear infinite;
  transform-origin: 50% -3em;
  animation-name: run, rotating;

  &:nth-child(2) {
    animation-delay: 0.075s;
  }

  &:nth-child(3) {
    animation-delay: 0.15s;
  }

  @keyframes run {
    0% {
      left: -5%;
    }
    10%,
    60% {
      left: calc((100% - 5%) / 2);
    }
    70%,
    100% {
      left: 100%;
    }
  }

  @keyframes rotating {
    0%,
    10% {
      transform: rotate(0deg);
    }
    60%,
    100% {
      transform: rotate(-1turn);
    }
  }
`;
