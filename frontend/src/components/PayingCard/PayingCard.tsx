import React from "react";
import axios from "axios";

import { FormEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import paymentImage from '../../assets/img/payment.jpg'
import { FcSimCardChip } from "react-icons/fc";
import { SiMastercard } from "react-icons/si";

const PayingCard = () => {

    const navigate = useNavigate();

    const[name,setName] = useState('');
    const[expirationDate,setExpirationDate] = useState('');
    const[cvv,setCvv] = useState('');
    const[cardNumber,setCardNumber] = useState('');
    const[address,setAddress] = useState('');
    const[phonenumber,setPhonenumber] = useState('');

    function handleSubmit(event: FormEvent<HTMLFormElement>)  {
        event.preventDefault();
        const payment = {name,expirationDate,cvv,cardNumber,address,phonenumber}

        axios.post("http://localhost:8080/payment", payment)
            .then(() => {
                console.log("New payment method");
                navigate("/auth/dashboard");
            })
            .catch(error => {
                console.error("There was an error making the request!", error);
            });
    }
  
    return (
        <div className="flex flex-col justify-center items-center min-h-screen border ">
            <div className="grid grid-cols-auto ">
                <form onSubmit={handleSubmit}>
                <div className="border rounded-l-xl shadow-2xl py-6  px-5 max-w-lg">
                    <h1 className="text-green font-bold text-2xl pb-2">Detalles de pago</h1>
                    <div className="flex flex-col">
                        <label>Nombre en la tarjeta</label>
                        <input className="border-b border-black mr-16" value={name} onChange={(e) => setName(e.target.value) } type="text" placeholder="Nombre en la tarjeta..." required/>

                        <label>Numero de telefono</label>
                        <input className="border-b border-black mr-16" value={phonenumber} onChange={(e) =>setPhonenumber(e.target.value) } type="text" placeholder="Numero de telefono..." required/> 

                        <label>Direccion de facturacion</label>
                        <input className="border-b border-black mr-16" value={address} onChange={(e) => setAddress(e.target.value) } type="text" placeholder="Direccion de facturacion..." required/>
                        
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
                        <input className="border-b border-black" onChange={(e) => setCardNumber(e.target.value) } type="text" value={cardNumber} placeholder=" Numero de tarjeta..." required/>
                        <div className="grid grid-cols-2 gap-3 ">
                            <div className="grid grid-rows-2">
                                <label>Fecha de expiracion</label>
                                <input className="border-b border-black" onChange={(e) => setExpirationDate(e.target.value) } type="text" value={expirationDate} placeholder=" Fecha..." required/>
                            </div>
                            <div className="grid grid-rows-2">
                                <label>CVV</label>
                                <input className="border-b border-black" onChange={(e) =>setCvv(e.target.value) } type="text" value={cvv} placeholder=" CVV..." required/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="flex flex-col items-center">
                            <button type="submit" className="text-white text-center bg-green rounded-lg px-5 py-1">Pagar </button>
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