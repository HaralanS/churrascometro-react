import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { getChurras } from "../services/axios.service";
import { IChurrasco } from "../interfaces/ChurrascoResponse.interface";

interface IChurrasContext {
    list: IChurrasco[];
    setList: (list:IChurrasco[]) => void;
    handleGetChurrascos: () => void;
}

const USER_CONTEXT_DEFAULT_VALUES = {
    list: [],
    setList: () => null,
    handleGetChurrascos: () => null,
}

const ChurrasContext = createContext<IChurrasContext | undefined>(USER_CONTEXT_DEFAULT_VALUES);
// const [list, setList] = useState<any[]>([])
interface IUserProvider {
    children: React.ReactNode
}

const ChurrasProvider = ({ children }: IUserProvider) => {
  const [list, setList] = useState<any>([])

    useEffect(() => {
        const onMount = async () => {
            console.log('CHamou')
            handleGetChurrascos();
        }
        onMount();
    }, [])

    const handleGetChurrascos = useCallback(async () => {
      try {
        const resp = await getChurras();
        setList(resp.data);
      } catch (error) {
        
      }
    }, [])
    
    return (
          <ChurrasContext.Provider
              value={{
                  list,
                  setList,
                  handleGetChurrascos
              }}>
              {children}
          </ChurrasContext.Provider>
      )
}

const useChurras = () => useContext(ChurrasContext);

export { ChurrasProvider, useChurras };