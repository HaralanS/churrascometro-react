import ItemChurars from "./components/ItemChurras";
import ButtonItem from "./components/ButtonItem";
import ItemData from "./components/ItemData";
import { memo } from 'react';
import { IChurrasco } from "../../interfaces/ChurrascoResponse.interface";


interface Props {
  carne: number;
  paoDeAlho: number;
  carvao: number;
  refri: number;
  cerveja: number;
  pessoas: number;
  data: Date;
  editar: () => void;
  deleta: () => void;
}

const Churrasco = memo(function Churrasco({ data, editar, deleta, carne, carvao, refri, cerveja, paoDeAlho, pessoas}: Props) {
  
  return (
    <div className="flex justify-between p-2">
      <ItemData item={data} classe={"w-[10%]"} />
      {/* <ItemChurars item={props.data} classe={"w-[10%]"} /> */}
      <ItemChurars item={pessoas} classe={"w-[10%]"}/>
      <ItemChurars item={carne.toFixed(2)} classe={"w-[13%]"} />
      <ItemChurars item={paoDeAlho} classe={"w-[13%]"}/>
      <ItemChurars item={carvao} classe={"w-[13%]"}/>
      <ItemChurars item={refri} classe={"w-[13%]"}/>
      <ItemChurars item={cerveja}classe={"w-[13%]"}/>
      <div className="w-[15%] flex justify-around flex-wrap gap-1">
        <ButtonItem btnFunc={editar} btnName='Editar' classe={'bg-green-600 pl-2 pr-2 text-white'}/>
        <ButtonItem btnFunc={deleta} btnName='Excluir' classe={'bg-red-600 pl-2 pr-2 text-white'} />
      </div>
    </div>

    
  )
})

// bg-green-600 pl-2 pr-2 text-white
// bg-red-600 pl-2 pr-2 text-white

export default Churrasco