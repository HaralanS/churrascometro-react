import Navbar from "../components/Navbar/Navbar"
import Churrasco from "../components/Churrasco/Churrasco"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { excluir, getChurras, postChurras } from "../services/axios.service";

export default function Home() {
  const navigate = useNavigate();
  const [lista, setLista] = useState<any[]>([]) 
  const [loading, setLoading] = useState(true)

  const deletar =  (ref:string) => {
    // axios.delete(`http://localhost:3000/churrascos/${ref}`).then(() => getChurras());
    const del =  excluir(ref).then(() => getChurras().then(response => setLista(response.data)).catch(error => console.log(error)).finally( () => setLoading(false) ))
  }

  // const getChurras = () => axios.get("http://localhost:3000/churrascos").then(response => setLista(response.data)).catch(error => console.log(error)).finally( () => setLoading(false) );  
  useEffect(() => {
    getChurras().then(response => setLista(response.data)).catch(error => console.log(error)).finally( () => setLoading(false) );
    
  }, []);

  const edit = (ref:any) => {
    navigate('/editchurras', {state: {ref}})
  }

  return (
    <div>
      <Navbar option />
      <div className="min-w-[400px] max-w-[800px] m-auto">
        <h2 className="font-bold text-xl p-5">Lista de Churrascos</h2>
        {lista.length > 0 && <div className="flex justify-between items-center p-2  font-semibold border-b-2 border-gray-500 bg-slate-200">
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
          {loading ? <h2 className="text-center m-[100px] text-slate-600 font-bold text-4xl">Loading...</h2> : lista.map((e) => <Churrasco key={e.id} data={e.data} homens={e.homens} mulheres={e.mulheres} criancas={e.criancas} deleta={() => deletar(e.id)} editar={() => edit(e)} />)}
        </div>
       
      </div>
    </div>
  )
}
