import React from "react";

import { ROUTES } from "../../ROUTES";

import { useState, FormEvent } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom"


const RegisterCard = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function handleSubmit(event: FormEvent<HTMLFormElement>)  {
        event.preventDefault();

        navigate("/paying");
    }

    return(
        <div className="border shadow-2xl rounded-lg">
            <div className="px-12 pb-4">
                <h1 className="text-2xl font-bold  flex justify-center my-4">Registra tu empresa!</h1>
                <form onClick={handleSubmit}>
                <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-2 gap-2">
                        <input className="border rounded-md py-1" type="text" placeholder=" Nombre de usuario" />
                        <input className="border rounded-md py-1" type="text" placeholder=" Nombre de tu empresa" />
                    </div>
                    <input className="border rounded-md py-1" type="text" name="email" id="email" placeholder="  Correo electronico"/>
                    <input className="border rounded-md py-1" type="password" name="password" id="password" placeholder="  Contraseña"/>
                    <div  className="text-white text-center bg-green rounded-lg p-2 mb-4">
                        <button type="submit">Confirmar</button>
                    </div>   
                </div>
                </form>
            </div>
        </div>
)
}

export default RegisterCard;