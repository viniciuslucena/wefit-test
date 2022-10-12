import styled from "styled-components"

export const CartContainer = styled.div`
  width: 100%;
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
    max-width: 44.7rem;
    width: 100%;
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

export const TableContainer = styled.div`
  width: 100%;
  padding: 1.3rem;
  overflow-x: auto;

  table {
    width: 100%;
    padding: 1.2rem;
    border-collapse: collapse;
  }

  tr:not(:first-child) {
    border-bottom: 1px solid #999;
  }

  th {
    color: #999999;
    font-size: 1.4rem;
    font-weight: 700;
    padding: 0.9rem 2.3rem;
    text-align: left;
  }

  td {
    color: var(--dark-gray);
    font-weight: 700;
    font-size: 1.4rem;
    padding: 2.3rem;

    img {
      width: 9rem;
    }

    svg {
      color: var(--blue);
      cursor: pointer;
    }

    .movieQuantity {
    display: flex;
    align-items: center;
    gap: 6px;

    span {
      color: var(--blue);
    }

    .quantity {
      color: var(--dark-gray);
      border: 1px solid #D9D9D9;
      border-radius: 4px;
      width: 2.7rem;
      padding: 4px;
    }

    .quantity::-webkit-outer-spin-button,
    .quantity::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    .quantity[type=number] {
      -moz-appearance: textfield;
    }
  }
}
`
