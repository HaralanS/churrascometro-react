import { createContext, useCallback, useContext } from "react";
import { edit } from "../services/axios.service";
import { Inputs } from "../interfaces/ChurrascoResponse.interface";

interface IChurrasContext {

  handleEditChurrascos: (data: Inputs, churrasco: string) => void;
}

const USER_CONTEXT_DEFAULT_VALUES = {

  handleEditChurrascos: () => null,
}

const EditChurrasContext = createContext<IChurrasContext | undefined>(USER_CONTEXT_DEFAULT_VALUES);

interface IUserProvider {
    children: React.ReactNode
}

const EditChurrasProvider = ({ children }: IUserProvider) => {
  

    const handleEditChurrascos = useCallback(async (data: Inputs, churrasco: string) => {
      try {
        const criancas = data.criancas || 0;
        const soma = data.homens + data.mulheres + criancas;
        const carne = (data.homens * 0.4) + (data.mulheres * 0.32) + (criancas * 0.2);
        const paoDeAlho = (data.homens * 2) + (data.mulheres * 2) + (criancas);
        const refri = Math.ceil(soma / 5);
        const cerveja = (data.homens + data.mulheres);
        await edit(churrasco, data, carne, paoDeAlho, refri, cerveja, soma, soma);
      } catch (error) {
        
      }
    }, [])
    
    return (
          <EditChurrasContext.Provider
              value={{ handleEditChurrascos }}>
              {children}
          </EditChurrasContext.Provider>
      )
}

const useEditChurras = () => useContext(EditChurrasContext);

export { EditChurrasProvider, useEditChurras };