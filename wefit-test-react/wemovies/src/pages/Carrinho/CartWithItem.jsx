import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import { formatPrice } from "../../utils/formatPrice";
import { Button } from "../../components/Button";
import * as S from "./styles";
import { calculateTotal } from "../../services/CartService";
import { Table } from "../../components/Table";

export const CartWithItem = () => {
  const { productsInCart } = useContext(CartContext);

  return (
    <S.CartContainer>
      <Table />
      <S.CartFooter>
        <div className="footerBtnContainer">
          <Link to="/compra-realizada">
            <Button>FINALIZAR PEDIDO</Button>
          </Link>
        </div>
        <div>
          <p className="totalPrice">
            <span>TOTAL</span>
            {formatPrice(calculateTotal(productsInCart))}
          </p>
        </div>
      </S.CartFooter>
    </S.CartContainer>
  );
};
