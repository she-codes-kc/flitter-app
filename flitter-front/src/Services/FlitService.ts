import { Flit } from "@/models/flit";
import axios from "axios";

class FlitService {
  allFlits(): Promise<Flit[]> {
    return axios
      .get<Flit[]>("https://api.escuelajs.co/api/v1/products") //cambiar por el real
      .then((response) => response.data);
  }

  oneFlit(id: number): Promise<Flit> {
    return axios
      .get<Flit>(`https://api.escuelajs.co/api/v1/products/${id}`) //cambiar por el real
      .then((response) => response.data);
  }

  findFlits(search: string, offset: number, limit: number): Promise<Flit[]> {
    return axios
      .get<Flit[]>(
        `https://api.escuelajs.co/api/v1/products/?title=${search}&offset=${offset}&limit=${limit}` //cambiar por el real
      )
      .then((response) => response.data);
  }
}

export default new FlitService();