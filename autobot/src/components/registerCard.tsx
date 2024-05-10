import React from "react";
import Link from "next/link";

const RegisterCard = () => {

    return(
        <div className="border shadow-2xl rounded-lg">
            <div className="px-12 pb-4">
                <h1 className="text-2xl font-bold  flex justify-center my-4">Registra tu empresa!</h1>
                <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-2 gap-2">
                        <input className="border rounded-md py-1" type="text" placeholder=" Nombre de usuario" />
                        <input className="border rounded-md py-1" type="text" placeholder=" Nombre de tu empresa" />
                    </div>
                    <input className="border rounded-md py-1" type="text" placeholder="  Correo electronico" />
                    <input className="border rounded-md py-1" type="password" placeholder="  Contraseña" />
                    <input className="border rounded-md py-1" type="password" placeholder="  Confirmar Contraseña" />
                    <Link href="/Paying" className="text-white text-center bg-green rounded-lg p-2 mb-4">
                        <button >Confirmar</button>
                    </Link>
                </div>
            </div>
        </div>
)
}

export default RegisterCard;