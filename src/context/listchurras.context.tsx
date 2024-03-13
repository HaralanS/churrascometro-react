import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { getChurras } from "../services/axios.service";

// 1 Criar a interface 
interface IChurrasContext {
    list: any[];
    setList: () => void;
    handleGetChurrascos: () => void;
}

// 2 Definir valores padroes

const USER_CONTEXT_DEFAULT_VALUES = {
    list: [],
    setList: () => null,
    handleGetChurrascos: () => null,
}

const ChurrasContext = createContext<IChurrasContext | undefined>(USER_CONTEXT_DEFAULT_VALUES);


interface IUserProvider {
    children: React.ReactNode
}

const ChurrasProvider = ({ children }: IUserProvider) => {

    useEffect(() => {
        const onMount = async () => {
            console.log('CHamou')
            handleGetChurrascos();
        }
        onMount();
    }, [])

    const handleGetChurrascos = useCallback(async () => {
      const [list, setList] = useState<any>([])
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