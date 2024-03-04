export default function ButtonItem(props:any) { 
return (
<button onClick={props.btnFunc} className={`${props.classe} text-center rounded-md font-semibold`}>{props.btnName}</button>
)}