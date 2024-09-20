import React from "react";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ISettingsCard } from "./types";
import { FaPlus } from "react-icons/fa6";

import { IoMdClose } from "react-icons/io";

const SettingsCard: React.FC<ISettingsCard> = ({ show, onClose }) => {

    const navigate = useNavigate();

    if (!show) return null;

    const handleClick = (e: FormEvent) => {
        e.preventDefault();
        navigate('/paying')
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-1/4 h-1/3 bg-white border border-gray rounded-md shadow-lg pl-4 pt-4">
                <button onClick={onClose} className="mt-4 px-4 py-2 bg-green-600 rounded"><IoMdClose size='20px' /></button>
                    <div className="flex flex-row justify-between mb-4 p-2  rounded-md shadow-sm w-3/4">
                        <p className="text-lg">Agregar metodo de pago</p>
                        <button onClick={handleClick} className=""><FaPlus size='20px' /></button>
                    </div>
                    <form action="" className="flex flex-col">
                        <p className="text-lg">Cambiar nombre de usuario</p>
                        <input type="text" placeholder="  Nuevo nombre de usuario..." className="border w-3/4 p-1 mt-2 mb-4" />
                        <button className=" border border-gray w-fit bg-green text-white px-4 py-1 rounded-md shadow-lg">Aplicar </button>
                    </form>
            </div>
        </div>
    );
};

export default SettingsCard;
