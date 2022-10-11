import { useContext } from "react";
import { IoMdBasket } from "react-icons/io";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import * as S from "./styles";

export const Header = () => {
  const { productsInCart } = useContext(CartContext);

  return (
    <S.Header>
      <Link to="/">
        <h1>WeMovies</h1>
      </Link>
      <S.BasketSession>
        <div>
          <p className="myCart">Meu Carrinho</p>
          {productsInCart.length === 1 ? (
            <p className="totalItens">{productsInCart.length} item</p>
          ) : (
            <p className="totalItens">{productsInCart.length} itens</p>
          )}
        </div>
        <Link to="/carrinho">
          <IoMdBasket size="32px" />
        </Link>
      </S.BasketSession>
    </S.Header>
  );
};
