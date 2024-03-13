import { create } from 'zustand';
import { IChurrasco, Inputs } from '../interfaces/ChurrascoResponse.interface';
import { getChurras, postChurras, edit, excluir } from '../services/axios.service';
import { nanoid } from 'nanoid'

interface ChurrascoState {
  listChurrasco: IChurrasco[];
  setListChurrasco: (value: IChurrasco[]) => void;
  handleGetChurrascos: () => Promise<void>; 
  handleCreateChurrascos: (data: Inputs) => Promise<void>;
  handleEditChurrasco: (data: Inputs, churrasco: string) => Promise<void>;
  handleExluirChurrasco: (id: string) => Promise<void>;
  
}

const useChurrascosStore = create<ChurrascoState>()(
  (set: any, get: any) => ({
      listChurrasco: [],
      setListChurrasco: (value) => {
          set({ listChurrasco: value })
      },
      handleGetChurrascos: async () => {
          const { setListChurrasco } = get();
          const resp = await getChurras<IChurrasco[]>();
          setListChurrasco(resp.data);
          // set({ list: resp.data })
      }, 
      handleCreateChurrascos: async (data) => {
        const criancas = data.criancas || 0;
        const soma = data.homens + data.mulheres + criancas;
        const carne = (data.homens * 0.4) + (data.mulheres * 0.32) + (criancas * 0.2);
        const paoDeAlho = (data.homens * 2) + (data.mulheres * 2) + (criancas);
        const refri = Math.ceil(soma / 5);
        const cerveja = (data.homens + data.mulheres);
        await postChurras({id: nanoid(), carne, paoDeAlho, refri, cerveja, carvao:soma, pessoas: soma, ...data});
      }, 
      handleEditChurrasco: async (data, churrasco) => {
        const criancas = data.criancas || 0;
        const soma = data.homens + data.mulheres + criancas;
        const carne = (data.homens * 0.4) + (data.mulheres * 0.32) + (criancas * 0.2);
        const paoDeAlho = (data.homens * 2) + (data.mulheres * 2) + (criancas);
        const refri = Math.ceil(soma / 5);
        const cerveja = (data.homens + data.mulheres);
        await edit(churrasco, data, carne, paoDeAlho, refri, cerveja, soma, soma);
      },
      handleExluirChurrasco: async (id) => {
        excluir(id);
      }

  }))

  export {useChurrascosStore}

  // handleCreateChurrascos: async (data) => {
  //   const criancas = data.criancas || 0;
  //   const soma = data.homens + data.mulheres + criancas;
  //   const carne = (data.homens * 0.4) + (data.mulheres * 0.32) + (criancas * 0.2);
  //   const paoDeAlho = (data.homens * 2) + (data.mulheres * 2) + (criancas);
  //   const refri = Math.ceil(soma / 5);
  //   const cerveja = (data.homens + data.mulheres)
  //   postChurras({id: nanoid(), carne, paoDeAlho, refri, cerveja, carvao:soma, pessoas: soma, ...data}).then(() => navigate('/'));
  //   console.log(data);