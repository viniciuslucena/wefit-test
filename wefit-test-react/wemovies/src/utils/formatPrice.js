export const formatPrice = (moviePrice) => {
  return moviePrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}
