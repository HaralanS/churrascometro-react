import { createContext, useCallback, useContext } from "react";
import { excluir } from "../services/axios.service";
// import { Inputs } from "../interfaces/ChurrascoResponse.interface";

interface IChurrasContext {

  handleDeleteChurrascos: (id:string) => void;
}

const USER_CONTEXT_DEFAULT_VALUES = {

  handleDeleteChurrascos: () => null,
}

const DeleteChurrasContext = createContext<IChurrasContext | undefined>(USER_CONTEXT_DEFAULT_VALUES);

interface IUserProvider {
    children: React.ReactNode
}

const DeleteChurrasProvider = ({ children }: IUserProvider) => {
  
    const handleDeleteChurrascos = useCallback(async (id: string) => {
      try {
        
        await excluir(id);
      } catch (error) {
        
      }
    }, [])
    
    return (
          <DeleteChurrasContext.Provider
              value={{ handleDeleteChurrascos }}>
              {children}
          </DeleteChurrasContext.Provider>
      )
}

const useDeleteChurras = () => useContext(DeleteChurrasContext);

export { DeleteChurrasProvider, useDeleteChurras };