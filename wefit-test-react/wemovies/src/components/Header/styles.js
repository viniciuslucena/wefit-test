import styled from 'styled-components'

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem 0;
  margin-bottom: 41px;

  h1 {
    font-size: 2rem;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`

export const BasketSession = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  text-align: right;
  gap: 1rem;

  .myCart {
    font-size: 1.4rem;
  }

  .totalItens {
    font-size: 1.2rem;
    color: #999999
  }

  svg {
    cursor: pointer;
  }
`
