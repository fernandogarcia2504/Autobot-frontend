import React from "react";

import { ROUTES } from "../../ROUTES";

import axios from "axios";

import { useState, FormEvent } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom"


const RegisterCard: React.FC = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [companyname, setCompanyname] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        navigate('/paying');

    };

    return(
        <div className="border shadow-2xl rounded-lg">
            <div className="px-12 pb-4">
                <h1 className="text-2xl font-bold  flex justify-center my-4">Registra tu empresa!</h1>
                <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-2 gap-2">
                        <input className="border rounded-md py-1" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder=" Nombre de usuario" required/>
                        <input className="border rounded-md py-1" type="text" value={password}  onChange={(e) => setCompanyname(e.target.value)} placeholder=" Nombre de tu empresa" required />
                    </div>
                    <input className="border rounded-md py-1" type="text" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="  Correo electronico" required/>
                    <input className="border rounded-md py-1" type="text" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} placeholder="  Numero de telefono" required/>
                    <input className="border rounded-md py-1" type="password" value={password}  onChange={(e) => setPassword(e.target.value)} placeholder="  Contraseña" required/>
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