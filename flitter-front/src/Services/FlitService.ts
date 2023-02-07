import { Flit } from "@/models/flit";
import axios from "axios";

class FlitService {
  allProducts(): Promise<Flit[]> {
    return axios
      .get<Flit[]>("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.data);
  }

  oneProduct(id: number): Promise<Flit> {
    return axios
      .get<Flit>(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => response.data);
  }

  findProducts(search: string, offset: number, limit: number): Promise<Flit[]> {
    return axios
      .get<Flit[]>(
        `https://api.escuelajs.co/api/v1/products/?title=${search}&offset=${offset}&limit=${limit}`
      )
      .then((response) => response.data);
  }
}

export default new FlitService();
