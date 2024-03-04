import { FieldError, FieldErrors } from 'react-hook-form';

interface InputTypes extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  nameLabel: string;
  register: any;
  name: string;
  error: FieldError | undefined;
}

export default function Input({error, register, name, nameLabel, ...rest}: InputTypes) {

  
  return (
    <>
    <label className='font-semibold'>{nameLabel}</label>
    <input {...register(name)} {...rest}/>
    {error && (<p className='text-yellow-500'>{error?.message}</p>)}
    </>
  )
}