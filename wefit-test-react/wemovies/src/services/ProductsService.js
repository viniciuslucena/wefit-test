import HttpClient from "./utils/HttpClient"

class ProductsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3000');
  }

  async listProducts() {
    return this.httpClient.get('/products')
  }
}

export default new ProductsService()
