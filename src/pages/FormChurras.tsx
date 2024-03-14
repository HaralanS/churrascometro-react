import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Navbar from "../components/Navbar/Navbar";
import PageTitle from "../components/PageTitle/PageTitle";
import Input from "../components/FormChurras/components/Input";
import { useNavigate } from "react-router-dom";
import { useChurrascosStore } from "../zustand/churrasco.zustand";



interface Inputs {
  data: Date
  homens: number
  mulheres: number
  criancas ?: number;
}

const schema = yup.object({
    data: yup.date().min(new Date(), 'Data nao pode ser igual ou inferior a hoje').required('Erro na data'),
    homens: yup.number().positive('Precisa ter pelo menos 1 homem').integer('Precisa ser um numero inteiro').required("O campo homens e necessario"),
    mulheres: yup.number().positive('Precisa ter pelo menos 1 mulher').integer('Precisa ser um numero inteiro').required("O campo mulheres e necessario"),
    criancas: yup.number().min(0, "Criancas nao pode ser negativo").integer('Precisa ser um numero inteiro')
  }).required()

export default function FormChurras() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  const navigate = useNavigate();
  const {handleCreateChurrascos} = useChurrascosStore();

  // const onSubmitThis = (data: Inputs ) => {
  //   const criancas = data.criancas || 0;
  //   const soma = data.homens + data.mulheres + criancas;
  //   const carne = (data.homens * 0.4) + (data.mulheres * 0.32) + (criancas * 0.2);
  //   const paoDeAlho = (data.homens * 2) + (data.mulheres * 2) + (criancas);
  //   const refri = Math.ceil(soma / 5);
  //   const cerveja = (data.homens + data.mulheres)
  //   postChurras({id: nanoid(), carne, paoDeAlho, refri, cerveja, carvao:soma, pessoas: soma, ...data}).then(() => navigate('/'))
  //   reset();
  //   console.log(data);
  //   console.log(errors);
  // }

  function formatDate(date = new Date()) {
    date.setDate(date.getDate() + 1);
    const year = date.toLocaleString('default', {year: 'numeric'});
    const month = date.toLocaleString('default', {
      month: '2-digit',
    });
    const day = date.toLocaleString('default', {day: '2-digit'});
  
    return [year, month, day].join('-');
  }

  const onSubmitThis = (data: Inputs) => {
    handleCreateChurrascos(data).then(() => navigate('/'))
    
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