export default function ItemData(props:any){
  const dia = props.item.slice(8,10);
  const mes = props.item.slice(5, 7);
  const ano = props.item.slice(0, 4);
  const dataFormat = `${dia}/${mes}/${ano}`
  return (
  <h3 className={`${props.classe} text-center min-w-[80px]`}>{dataFormat}</h3>
)};