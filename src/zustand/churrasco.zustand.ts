import { create } from 'zustand';
import { IChurrasco } from '../interfaces/ChurrascoResponse.interface';
import { getChurras } from '../services/axios.service';


interface ChurrascoState {
  listChurrasco: IChurrasco[];
  setListChurrasco: (value: IChurrasco[]) => void;
  handleGetChurrascos: () => void; 
}

const useChurrascosStore = create<ChurrascoState>()(
  (set: any, get: any) => ({
      listChurrasco: [],
      setListChurrasco: (value: any) => {
          set({ listChurrasco: value })
      },
      handleGetChurrascos: async () => {
          const { setListChurrasco } = get();
          const resp = await getChurras<IChurrasco[]>();
          setListChurrasco(resp.data);
          // set({ list: resp.data })
      }
  }))

  export {useChurrascosStore}