import React from "react";

interface PricingCardProps {
    title:string;
    price: number;
}

function PricingCard(props: PricingCardProps) {

    const normalFeatures = ['Solo un numero registrado. ','Mensajes limitados.','Funnels limitados.'];
    const premiumFeatures = ['Hasta un maximo de cinco telefonos.', 'Mensajes ilimitados.','Funnels ilimitados.'];
    
    return(
        <div className="border shadow-2xl rounded-lg">
            <div className="p-4 ">
                <h1 className="text-lg text-gray-700 my-4">{props.title}</h1>
                <h1 className="text-2xl font-semibold my-4">$ {props.price}</h1>
                <a href="/Register/Form" className="bg-green rounded-md shadow-md text-white px-2 py-2 my-2">Empieza ahora con plan {props.title}</a>
                <p className="font-semibold my-4">Lo que incluye el plan {props.title}:</p>
                {props.title === 'Basico' ? (
                    <ul className="max-w-full">
                        {normalFeatures.map((feature, index) => (
                            
                            <li className="my-4" key={index}>{feature}</li>
                        ))}
                    </ul>
                ) : (
                    <ul>
                        {premiumFeatures.map((feature, index) => (
                            <li className="my-4" key={index}>{feature}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default PricingCard;