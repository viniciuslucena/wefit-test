import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import * as S from "./styles";
import { TableRow } from "./TableRow";

export const Table = () => {
  const { productsInCart } = useContext(CartContext);

  return (
    <S.TableContainer type="withItem">
      <table>
        <tr>
          <th></th>
          <th>PRODUTO</th>
          <th>QTD</th>
          <th>SUBTOTAL</th>
          <th></th>
        </tr>
        {productsInCart.map((product, id) => (
          <TableRow id={id} product={product} key={id} />
        ))}
      </table>
    </S.TableContainer>
  );
};
