import ItemChurars from "./components/ItemChurras";
import ButtonItem from "./components/ButtonItem";
import ItemData from "./components/ItemData";

export default function Churrasco(props: any) {
  let soma = props.homens + props.mulheres + props.criancas;
  let carne = (props.homens * 0.4) + (props.mulheres * 0.32) + (props.criancas * 0.2);
  let paoDeAlho = (props.homens * 2) + (props.mulheres * 2) + (props.criancas);
  let refri = Math.ceil(soma / 5);
  let cerveja = (props.homens + props.mulheres)
  return (
    <div className="flex justify-between p-2">
      <ItemData item={props.data} classe={"w-[10%]"} />
      {/* <ItemChurars item={props.data} classe={"w-[10%]"} /> */}
      <ItemChurars item={soma} classe={"w-[10%]"}/>
      <ItemChurars item={carne.toFixed(2)} classe={"w-[13%]"} />
      <ItemChurars item={paoDeAlho} classe={"w-[13%]"}/>
      <ItemChurars item={soma} classe={"w-[13%]"}/>
      <ItemChurars item={refri} classe={"w-[13%]"}/>
      <ItemChurars item={cerveja}classe={"w-[13%]"}/>
      <div className="w-[15%] flex justify-around flex-wrap gap-1">
        <ButtonItem btnFunc={props.editar} btnName='Editar' classe={'bg-green-600 pl-2 pr-2'}/>
        <ButtonItem btnFunc={props.delete} btnName='Excluir' classe={'bg-red-600 pl-2 pr-2'} />
      </div>
    </div>
  )
}