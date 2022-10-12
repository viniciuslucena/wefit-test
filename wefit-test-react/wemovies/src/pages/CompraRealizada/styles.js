import styled from "styled-components";

export const Container = styled.div`
  max-width: 73.4rem;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 5.3rem;

  @media screen and (max-width: 769px) {
    padding: 0 12px;
  }
`

export const FinishContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  padding: 6.3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: var(--dark-gray);
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 5rem;
    text-align: center;
  }

  img {
    max-width: 29.4rem;
    width: 100%;
  }

  .btnContainer {
    width: 18rem;
    margin-top: 2.1rem;

    a {
      text-decoration: none;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
