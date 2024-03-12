import axios, { AxiosResponse } from 'axios';
import { IChurrasco } from '../interfaces/ChurrascoResponse.interface';


const BASE_URL = 'http://localhost:3000/churrascos/';


export const postChurras = <T>( data:IChurrasco): Promise<AxiosResponse<T, any>> => {
  return axios.post(BASE_URL, (data))
}

export const getChurras = async <T>(): Promise<AxiosResponse<T, any>> => {
  return axios.get(BASE_URL)
}

export const excluir = (ref: any) => axios.delete(`${BASE_URL}${ref}`);

export const edit = (id: any, data:any, carne: number, paoDeAlho:number, refri:number, cerveja:number, carvao:number, pessoas:number) => {
  return axios.put(`${BASE_URL}${id}`, ({id: id,data:data.data, homens: Number(data.homens), mulheres: Number(data.mulheres), criancas: Number(data.criancas), carne, paoDeAlho, refri, cerveja, carvao, pessoas}))
}