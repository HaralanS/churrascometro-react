import { useNavigate } from "react-router-dom";

export default function Navbar(props: any) {
  const navigate = useNavigate();
  return (
    <nav className="h-[100px] bg-slate-500 font-semibold flex">
      <ul className="m-auto ">
        {props.option ? <li onClick={() => navigate('/createchurras')} className="text-center hover:bg-slate-400 cursor-pointer p-2 text-xl text-slate-100">Criar Churrasco</li> : <li onClick={() => navigate('/')} className="text-center hover:bg-slate-400 cursor-pointer p-2 text-xl text-slate-100">Home</li>}
        
      </ul>
    </nav>
  )
}