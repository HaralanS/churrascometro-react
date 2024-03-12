export interface IChurrasco extends ChurrascoData {
  id: string;
  carne: number;
  paoDeAlho: number;
  carvao: number;
  refri: number;
  cerveja: number;
  pessoas: number;
  
}

export interface ChurrascoData {
  data: Date;
  homens: number;
  mulheres: number;
  criancas?: number;
}

export interface Inputs {
  data: Date
  homens: number
  mulheres: number
  criancas ?: number;
}