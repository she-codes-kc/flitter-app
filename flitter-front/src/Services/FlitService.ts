import { Flit } from "@/models/flit";
import axios from "axios";

class FlitService {
  allFlits(): Promise<Flit[]> {
    return axios
      .get<Flit[]>("/api/flits") 
      .then((response) => response.data);
  }

  oneFlit(id: number): Promise<Flit> {
    return axios
      .get<Flit>(`/api/flits/${id}`) 
      .then((response) => response.data);
  }

  findFlits(search: string, offset: number, limit: number): Promise<Flit[]> {
    return axios
      .get<Flit[]>(
        `https://api.escuelajs.co/api/v1/products/?title=${search}&offset=${offset}&limit=${limit}` 
      )
      .then((response) => response.data);
  }
}

export default new FlitService();
