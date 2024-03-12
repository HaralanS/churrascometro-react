import Navbar from "../components/Navbar/Navbar"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form"
import * as yup from "yup"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../components/FormChurras/components/Input";
import PageTitle from "../components/PageTitle/PageTitle";
import { edit } from "../services/axios.service";
import { useChurrascosStore } from "../zustand/churrasco.zustand";

interface Inputs {
  data: Date
  homens: number
  mulheres: number
  criancas ?: number;
}

const schema = yup.object({
    data: yup.date().min(new Date(), 'Erro min data').required('Erro na data'),
    homens: yup.number().positive('Precisa ter pelo menos 1 homem').integer().required("O campo homens e necessario"),
    mulheres: yup.number().positive('Precisa ter pelo menos 1 mulher').integer().required("O campo homens e necessario"),
    criancas: yup.number().min(0, "Criancas nao pode ser negativo").integer()
  }).required()

export default function EditChurras() {
  const location = useLocation();
  const churrasco = location.state.churrasco;
  const {handleEditChurrasco} = useChurrascosStore();
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  })
  
  const navigate = useNavigate();

  // const onSubmitThis = (data: Inputs) => {
  //   edit(churrasco, data).then(() => navigate('/'));
    
  // }

  const onSubmitThis = (data: Inputs) => {
    handleEditChurrasco(data, churrasco.id).then(() => navigate('/'))
    
  }

  function formatDate(date = new Date()) {
    const year = date.toLocaleString('default', {year: 'numeric'});
    const month = date.toLocaleString('default', {
      month: '2-digit',
    });
    const day = date.toLocaleString('default', {day: '2-digit'});
  
    return [year, month, day].join('-');
  }

  return (
    <div>
      <Navbar />
      <PageTitle title="Edite seu Churrasco" />
      <div>
      <form className="flex flex-col w-[300px] m-auto mt-[50px] bg-slate-500 p-4 rounded-lg gap-1" onSubmit={handleSubmit(onSubmitThis)} >
      
      <Input defaultValue={formatDate(new Date(churrasco.data))} nameLabel="Data:" name="data" type="date" register={register} error={errors.data}  />
      <Input defaultValue={churrasco.homens} nameLabel="Homens:" name="homens" type="number" register={register} error={errors.homens} />
      <Input defaultValue={churrasco.mulheres} nameLabel="Mulheres:" name="mulheres" type="number" register={register} error={errors.mulheres} />
      <Input defaultValue={churrasco.criancas} nameLabel="Criancas:" name="criancas" type="number" register={register} error={errors.criancas} />
      
      <button className="bg-slate-50 w-[100px] m-auto mt-[10px] font-semibold rounded-md" type="submit" >Submit</button>
    </form>
        </div>
    </div>
  )
}