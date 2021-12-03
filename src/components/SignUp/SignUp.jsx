import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

export const SignUp = ({ updateFormState, changeFormType, signUp, loading }) => (
  <div className="flex w-5/6 flex-col  justify-center items-center">
    <div className="w-full py-3 text-center">
      <img className="mx-auto h-12 w-auto mb-4" src="https://tailwindui.com/img/logos/workflow-mark-orange-500.svg" alt="Workflow" />
      <h2 className="font-extrabold text-3xl">Crea tu cuenta</h2>
      <h6>
        O inicia sesion con 
        <span className="text-orange-light cursor-pointer" onClick={changeFormType}> tus credenciales</span>
      </h6>
    </div>

    <form className="w-full py-3 mb-3 flex flex-col">
      <Input label="Usuario" name="username" type="textt" handleChange={updateFormState} required/>
      <Input label="Contraseña" name="password" type="password" handleChange={updateFormState} required/>
      <Input label="Correo" name="email" type="email" handleChange={updateFormState} required/>
    </form>

    <Button title="Registrar" loading={loading} onClick={signUp}/>

  </div>
);