import styled from "styled-components";

export const MoviesList = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`

export const Loading = styled.div`
  height: calc(100vh - 12.4rem);
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  svg {
    animation: spinner .6s linear infinite;
  }
`
