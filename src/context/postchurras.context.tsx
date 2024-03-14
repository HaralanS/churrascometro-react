import { createContext, useCallback, useContext } from "react";
import { postChurras } from "../services/axios.service";
import { Inputs } from "../interfaces/ChurrascoResponse.interface";
import { nanoid } from 'nanoid'

interface IChurrasContext {

  handleCreateChurrascos: (data: Inputs) => void;
}

const USER_CONTEXT_DEFAULT_VALUES = {

  handleCreateChurrascos: () => null,
}

const PostChurrasContext = createContext<IChurrasContext | undefined>(USER_CONTEXT_DEFAULT_VALUES);

interface IUserProvider {
    children: React.ReactNode
}

const PostChurrasProvider = ({ children }: IUserProvider) => {
  

    const handleCreateChurrascos = useCallback(async (data: Inputs) => {
      try {
        const criancas = data.criancas || 0;
        const soma = data.homens + data.mulheres + criancas;
        const carne = (data.homens * 0.4) + (data.mulheres * 0.32) + (criancas * 0.2);
        const paoDeAlho = (data.homens * 2) + (data.mulheres * 2) + (criancas);
        const refri = Math.ceil(soma / 5);
        const cerveja = (data.homens + data.mulheres);
        await postChurras({id: nanoid(), carne, paoDeAlho, refri, cerveja, carvao:soma, pessoas: soma, ...data});
      } catch (error) {
        
      }
    }, [])
    
    return (
          <PostChurrasContext.Provider
              value={{ handleCreateChurrascos }}>
              {children}
          </PostChurrasContext.Provider>
      )
}

const usePostChurras = () => useContext(PostChurrasContext);

export { PostChurrasProvider, usePostChurras };