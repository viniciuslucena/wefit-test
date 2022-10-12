import { formatPrice } from "../utils/formatPrice";

  export const calculateSubtotal = (productToCalculate, context) => {
    const product = context.find(
      (product) => product === productToCalculate
    );

    return formatPrice(product.quantity * product.price);
  };

  export const calculateTotal = (context) => {
    const sum = context.reduce((acc, obj) => {
      return acc + obj.price * obj.quantity;
    }, 0);

    return sum;
  };

  export const removeItem = (productToRemove, context, setContext) => {
    const products = context.filter((product) => {
      return product !== productToRemove;
    });

    setContext(products);
  };

  export const removeOneItem = (productToRemove, context, setContext) => {
    const copyProducts = [...context];
    const product = copyProducts.find((product) => product === productToRemove);

    if (product.quantity > 0) {
      product.quantity = product.quantity - 1;
    } else {
      removeItem(productToRemove);
    }

    setContext(copyProducts);
  };

  export const addItem = (productToAdd, context, setContext) => {
    const copyProducts = [...context];
    const product = copyProducts.find((product) => product === productToAdd);

    if (product) {
      product.quantity = product.quantity + 1;
    }

    setContext(copyProducts);
  };

  export const inputQuantity = (quantity, productToAdd, context, setContext) => {
    const copyProducts = [...context];
    const product = copyProducts.find((product) => product === productToAdd);

    if (product) {
      product.quantity = quantity;
    }

    setContext(copyProducts);
  }
