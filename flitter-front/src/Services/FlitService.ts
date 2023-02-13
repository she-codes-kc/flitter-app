import { Flit } from "@/models/flit";
import axios from "axios";

type FlitsResponse = {
  results: Flit[];
};

class FlitService {
  allFlits(): Promise<Flit[]> {
    return axios
      .get<FlitsResponse>("/api/flits")
      .then((response) => response.data)
      .then((response) => response.results);
  }

  oneFlit(id: number): Promise<Flit> {
    return axios
      .get<Flit>(`/api/flits/${id}`)
      .then((response) => response.data);
  }

  findFlits(search: string, offset: number, limit: number): Promise<Flit[]> {
    return axios
      .get<FlitsResponse>(
        `/api/flits?text=${search}&offset=${offset}&limit=${limit}`
      )
      .then((response) => response.data)
      .then((response) => response.results);
  }

  createFlit(text: string): Promise<Flit> {
    return axios
      .post<Flit>("/api/flits", { text, author: "@gsanahi" })
      .then((response) => response.data);
  }
}

export default new FlitService();
