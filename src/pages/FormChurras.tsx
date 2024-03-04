import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form"
import * as yup from "yup"
import { nanoid } from 'nanoid'
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import PageTitle from "../components/PageTitle/PageTitle";
import Input from "../components/FormChurras/components/Input"

interface Inputs {
  data: Date
  homens: number
  mulheres: number
  criancas ?: number;
}

const schema = yup.object({
    data: yup.date().min(new Date(), 'Erro min data').required('Erro na data'),
    homens: yup.number().positive('Precisa ter pelo menos 1 homem').integer().required("O campo homens e necessario"),
    mulheres: yup.number().positive('Precisa ter pelo menos 1 mulher').integer().required("O campo mulheres e necessario"),
    criancas: yup.number().min(0, "Criancas nao pode ser negativo").integer()
  }).required()

  // criancas: yup.number().min(0).integer()

export default function FormChurras() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  // console.log(watch("data"))

  const onSubmitThis = (data: Inputs ) => {
    axios.post('http://localhost:3000/churrascos', ({id: nanoid(),data:data.data, homens: Number(data.homens), mulheres: Number(data.mulheres), criancas: Number(data.criancas)}));
    reset();
    console.log(data);
    console.log(errors);
  }

  function formatDate(date = new Date()) {
    date.setDate(date.getDate() + 1);
    const year = date.toLocaleString('default', {year: 'numeric'});
    const month = date.toLocaleString('default', {
      month: '2-digit',
    });
    const day = date.toLocaleString('default', {day: '2-digit'});
  
    return [year, month, day].join('-');
  }

  return (
    <>
    <Navbar />
    <PageTitle title="Crie seu Churrasco" />
    <form className="flex flex-col w-[300px] m-auto mt-[50px] bg-slate-500 p-4 rounded-lg gap-1" onSubmit={handleSubmit(onSubmitThis)} >
      
      <Input defaultValue={formatDate(new Date())} nameLabel="Data:" name="data" type="date" register={register} error={errors.data}  />
      <Input defaultValue={0} nameLabel="Homens:" name="homens" type="number" register={register} error={errors.homens} />
      <Input defaultValue={0} nameLabel="Mulheres:" name="mulheres" type="number" register={register} error={errors.mulheres} />
      <Input defaultValue={0} nameLabel="Criancas:" name="criancas" type="number" register={register} error={errors.criancas} />
      
      <button className="bg-slate-50 w-[100px] m-auto mt-[10px] font-semibold rounded-md" type="submit" >Submit</button>
    </form>
     
    </>

    
  )
}