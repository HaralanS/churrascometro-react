import ItemChurars from "./components/ItemChurras";
import ButtonItem from "./components/ButtonItem";
import ItemData from "./components/ItemData";
import { memo } from 'react';

interface Props {
  mulheres:number;
  homens: number;
  criancas: number;
  data: Date;
  editar: void;
  deleta: void;
}

const Churrasco = memo(function Churrasco({homens, mulheres, criancas, data, editar, deleta}: Props) {
  let soma = homens + mulheres + criancas;
  let carne = (homens * 0.4) + (mulheres * 0.32) + (criancas * 0.2);
  let paoDeAlho = (homens * 2) + (mulheres * 2) + (criancas);
  let refri = Math.ceil(soma / 5);
  let cerveja = (homens + mulheres)
  return (
    <div className="flex justify-between p-2">
      <ItemData item={data} classe={"w-[10%]"} />
      {/* <ItemChurars item={props.data} classe={"w-[10%]"} /> */}
      <ItemChurars item={soma} classe={"w-[10%]"}/>
      <ItemChurars item={carne.toFixed(2)} classe={"w-[13%]"} />
      <ItemChurars item={paoDeAlho} classe={"w-[13%]"}/>
      <ItemChurars item={soma} classe={"w-[13%]"}/>
      <ItemChurars item={refri} classe={"w-[13%]"}/>
      <ItemChurars item={cerveja}classe={"w-[13%]"}/>
      <div className="w-[15%] flex justify-around flex-wrap gap-1">
        <ButtonItem btnFunc={editar} btnName='Editar' classe={'bg-green-600 pl-2 pr-2'}/>
        <ButtonItem btnFunc={deleta} btnName='Excluir' classe={'bg-red-600 pl-2 pr-2'} />
      </div>
    </div>
  )
})

export default Churrasco