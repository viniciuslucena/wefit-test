import { useContext } from "react";
import { IoMdBasket } from "react-icons/io";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import * as S from "./styles";

export const Header = () => {
  const { productsInCart } = useContext(CartContext);

  const totalProducts = productsInCart.reduce((acc, obj) => {
    return acc + obj.quantity;
  }, 0);

  return (
    <S.Header>
      <Link to="/">
        <h1>WeMovies</h1>
      </Link>
      <S.BasketSession>
        <div>
          <p className="myCart">Meu Carrinho</p>
          {totalProducts === 1 ? (
            <p className="totalItens">{totalProducts} item</p>
          ) : (
            <p className="totalItens">{totalProducts} itens</p>
          )}
        </div>
        <Link to="/carrinho">
          <IoMdBasket size="32px" />
        </Link>
      </S.BasketSession>
    </S.Header>
  );
};
