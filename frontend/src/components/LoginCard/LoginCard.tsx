import React, { FormEvent } from "react";
import axios from "axios";


import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const LoginCard: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState('');
    const navigate = useNavigate();



    return (

        <div className="flex justify-center items-center min-h-screen">
            <div className="border shadow-2xl rounded-lg flex flex-col pt-12 pb-12 px-5 max-w-sm">
                <form>
                    <div className="grid grid-rows-5 gap-5">
                        <h2 className="font-bold text-3xl ">Iniciar Sesión</h2>
                        <h3 className="font-semibold text-l">Sigue aumentando las posibilidades de tu negocio.</h3>
                        <input className="border border-black rounded-md place" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="  Correo o nombre de usuario" />
                        <input className="border border-black rounded-md " type="password" onChange={(e) => setPassword(e.target.value)} placeholder="  Contraseña" />
                        <a href="" className="text-green">¿Olvidaste tu contraseña?</a>
                    </div>
                    <div className="flex flex-col items-center pt-8">
                        <button className="bg-green text-white py-2 px-16  rounded-2xl" type="submit">Iniciar sesión</button>     
                        
                    </div>
                </form>
                <div className="flex items-center justify-center my-4">
                <form>
                    <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150" type="submit">
                        <img className="translate-y-1/3" src="https://www.svgrepo.com/show/475656/google-color.svg" width={15} height={15} loading="lazy" alt="google logo" />
                        <span>Login with Google</span>
                    </button>
                </form>
                </div>
                <p className="flex items-center justify-center gap-2">Nuevo en autobot? <a href='/Register'className="text-green">Regístrate aquí</a></p>
            </div>
        </div>
    );
}

export default LoginCard;