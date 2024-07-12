import React from "react";

import { FormEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import paymentImage from '../../assets/img/payment.jpg'
import { FcSimCardChip } from "react-icons/fc";
import { SiMastercard } from "react-icons/si";

const PayingCard = () => {

    const navigate = useNavigate();

    function handleSubmit(event: FormEvent<HTMLFormElement>)  {
        event.preventDefault();

        navigate("/auth/dashboard");
    }
  
    return (
        <div className="flex flex-col justify-center items-center min-h-screen border ">
            <div className="grid grid-cols-auto ">
                <form onClick={handleSubmit}>
                <div className="border rounded-l-xl shadow-2xl py-6  px-5 max-w-lg">
                    <h1 className="text-green font-bold text-2xl pb-2">Detalles de pago</h1>
                    <div className="flex flex-col">
                        <label>Correo electronico</label>
                        <input className="border-b border-black mr-16" type="text" placeholder="Correo electronico..." />

                        <label>Numero de telefono</label>
                        <input className="border-b border-black mr-16" type="text" placeholder="Numero de telefono..." /> 

                        <label>Direccion de facturacion</label>
                        <input className="border-b border-black mr-16" type="text" placeholder="Direccion de facturacion..." />
                        
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="rounded-lg my-4 py-4 bg-gray-700 text-white max-w-xs px-6">
                            <div className="flex justify-end py-2">
                                <div className="grid grid-cols-[20px,1fr] gap-3">
                                    <p className="flex text-xs">Valid Thruh</p>
                                    <p className="text-md">12/21</p>
                                </div>
                            </div>
                            <div className="flex flex-col items">
                                <FcSimCardChip className="text-2xl" />
                                <p className="text-3xl">**** **** **** ****</p>
                            </div>
                            <div className="grid grid-cols-2">
                                <p className="text-sm">CVV</p> 
                                <SiMastercard className="text-2xl" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label>Numero de tarjeta</label>
                        <input className="border-b border-black" type="text" placeholder=" Numero de tarjeta..." />
                        <div className="grid grid-cols-2 gap-3 ">
                            <div className="grid grid-rows-2">
                                <label>Fecha de expiracion</label>
                                <input className="border-b border-black" type="text" placeholder=" Fecha..." />
                            </div>
                            <div className="grid grid-rows-2">
                                <label>CVV</label>
                                <input className="border-b border-black" type="text" placeholder=" CVV..." />
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="flex flex-col items-center">
                            <button type="submit" className="text-white text-center bg-green rounded-lg px-5 py-1">Checkout</button>
                        </div>
                    </div>
                </div>
                </form>
                <div className="">
                    <img className="rounded-r-xl shadow-2xl" src={paymentImage} alt="Payment decoration pic" width={400} height={300} />
                </div>
            </div>
        </div>

    );
}

export default PayingCard;