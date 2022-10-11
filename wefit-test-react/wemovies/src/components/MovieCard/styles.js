import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  width: 23rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1.1rem;
  border-radius: 4px;
  font-weight: 700;

  .movieTitle {
    color: var(--dark-gray);
    font-size: 1.2rem;
    padding: 7px 0 2px;
  }

  .moviePrice {
    width: 100%;
    color: var(--dark-gray);
    font-size: 1.2rem;
    padding: 7px 0 2px;
    margin-bottom: 0.8rem;
  }

  .quantity {
    font-weight: 400;
    margin-left: 0.5rem;
  }

  .buttonText {
    width: 100%;
    text-align: center;
  }
`
export const Image = styled.img`
  width: 14.7rem;
  height: 18.8rem;
`
