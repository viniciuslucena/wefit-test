import styled from "styled-components";

export const Container = styled.div`
  max-width: 73.4rem;
  width: 100%;
  margin: 0 auto;
`
export const EmptyCart = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 6.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: var(--dark-gray);
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 5rem;
  }

  hr {
    width: 44.7rem;
  }

  .btnContainer {
    width: 18rem;
    margin-top: 3.3rem;
    text-decoration: none;

    button {
      display: flex;
      justify-content: center;
    }
  }
`
