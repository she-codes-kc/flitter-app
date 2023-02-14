import { Flit } from "@/models/flit";
import axios from "axios";

type FlitsResponse = {
  results: Flit[];
};

type FindFlitsParams = {
  text?: string;
  sort?: string;
  skip?: number;
  limit?: number;
  author?: string;
};

class FlitService {
  oneFlit(id: number): Promise<Flit> {
    return axios
      .get<Flit>(`/api/flits/${id}`)
      .then((response) => response.data);
  }

  findFlits(params: FindFlitsParams): Promise<Flit[]> {
    return axios
      .get<FlitsResponse>(`/api/flits`, { params })
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
