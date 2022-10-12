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
export const CartContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 4px;

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
    max-width: 17.8rem;
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

export const CartFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1.2rem;

  .footerBtnContainer {
    width: 18rem;

    a {
      text-decoration: none;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .totalPrice {
    margin: 0;
    font-size: 2.4rem;
    color: var(--dark-gray);
    font-weight: 700;

    span {
      color: #999;
      font-weight: 700;
      font-size: 1.4rem;
      margin-right: 4px;
    }
  }
`
export const EmptyCart = styled.div`
  padding: 6.3rem;
  width: 100%;
  background-color: #fff;
  border-radius: 4px;

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
    max-width: 17.8rem;
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
