import Navbar from "../components/Navbar/Navbar";
import Churrasco from "../components/Churrasco/Churrasco";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IChurrasco } from "../interfaces/ChurrascoResponse.interface";
import { useChurrascosStore } from "../zustand/churrasco.zustand";

export default function Home() {
  const navigate = useNavigate();
  // const [lista, setLista] = useState<IChurrasco[]>([]) 
  // const [loading, setLoading] = useState(true)
  const { listChurrasco, handleGetChurrascos, handleExluirChurrasco} = useChurrascosStore();

  const deletar = (id:string) => {
    handleExluirChurrasco(id).then(() => location.reload());
  }

  // useEffect(() => {
  //   getChurras<IChurrasco[]>().then(response => setLista(response.data)).catch(error => console.log(error)).finally( () => setLoading(false) );
  // }, []);

  useEffect(() => {
    handleGetChurrascos();
   
  }, [])

  const edit = (churrasco: IChurrasco) => {
    navigate('/editchurras', {state: {churrasco}})
  }

  return (
    <div>
      <Navbar option />
      <div className="min-w-[400px] max-w-[800px] m-auto">
        <h2 className="font-bold text-xl p-5">Lista de Churrascos</h2>
        {listChurrasco.length > 0 && <div className="flex justify-between items-center p-2  font-semibold border-b-2 border-gray-500 bg-slate-200">
          <h4 className="w-[10%] text-center">Data</h4>
          <h4 className="w-[10%]  bg-slate-200 text-center">Pessoas</h4>
          <h4 className="w-[13%] text-center">Carne (kg)</h4>
          <h4 className="w-[13%] bg-slate-200 text-center">Pao de Alho</h4>
          <h4 className="w-[13%] text-center">Carvao (kg)</h4>
          <h4 className="w-[13%] bg-slate-200 text-center">Refri (2L)</h4>
          <h4 className="w-[13%] text-center">Cerveja (garrafa)</h4>
          <h4 className="w-[15%] bg-slate-200 text-center">Editar/ Excluir</h4>
        </div> }
        <div>
          {/* {loading ? <div  className="m-auto mt-[100px] h-32 w-32 animate-spin rounded-full border-[8px] border-solid border-blue-600 border-e-transparent"
  role="status"></div> : listChurrasco.map((e) => <Churrasco key={e.id} data={e.data} pessoas={e.pessoas} carne={e.carne} carvao={e.carvao} refri={e.refri} cerveja={e.cerveja} paoDeAlho={e.paoDeAlho} deleta={() => deletar(e.id)} editar={() => edit(e)} />)} */}
          {listChurrasco.map((e) => <Churrasco key={e.id} data={e.data} pessoas={e.pessoas} carne={e.carne} carvao={e.carvao} refri={e.refri} cerveja={e.cerveja} paoDeAlho={e.paoDeAlho} deleta={() => deletar(e.id)} editar={() => edit(e)} />)}
        </div>
       
      </div>
    </div>
  )
}
