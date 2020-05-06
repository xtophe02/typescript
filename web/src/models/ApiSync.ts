import axios, { AxiosPromise } from "axios";

interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch = (id: number): AxiosPromise<T> => {
    return axios.get(`${this.rootUrl}/${id}`);
  };
  save = (data: T): AxiosPromise<T> => {
    const { id } = data;
    if (id) {
      return axios.patch(`${this.rootUrl}/${id}`, data);
    }
    return axios.post(this.rootUrl, data);
  };
}
