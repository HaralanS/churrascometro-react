import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'http://localhost:3000/churrascos/';


export const postChurras = (ref:any, data: any) => {
  return axios.post(BASE_URL, ({id: ref,data:data.data, homens: Number(data.homens), mulheres: Number(data.mulheres), criancas: Number(data.criancas)}))
}

export const getChurras = async <T>(): Promise<AxiosResponse<T, any>> => {
  return axios.get(BASE_URL)
}

export const excluir = (ref: any) => axios.delete(`${BASE_URL}${ref}`);

export const edit = (churrasco: any, data:any) => {
  return axios.put(`${BASE_URL}${churrasco.id}`, ({id: churrasco.id,data:data.data, homens: Number(data.homens), mulheres: Number(data.mulheres), criancas: Number(data.criancas)}))
}