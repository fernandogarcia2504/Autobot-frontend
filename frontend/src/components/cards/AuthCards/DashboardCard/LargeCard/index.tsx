import React from "react";
import { ILargeCard } from "./types";

import { FaUserCircle } from "react-icons/fa";

const LargeCard = (props: ILargeCard) => {
    return(
        <div className="border border-gray w-fit rounded-md shadow-lg px-3">
            <div className="border-b border-gray py-2 ">
                <h1 className="text-lg font-semibold">{props.title}</h1>
            </div>
            <div className="flex flex-row gap-3 items-center">
                <FaUserCircle size='40px'/>
                <div className="flex flex-col">
                    <h1 className="font-semibold">Fernando Garcia Tejeda</h1>
                    <p>Deberian mejorar el tiempo de entrega a domicilio.</p>
                </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
                <FaUserCircle size='40px'/>
                <div className="flex flex-col">
                    <h1 className="font-semibold">Ricardo Garcia</h1>
                    <p>La mayoria de la comida es buena, sin embargo a las enchiladas verdes les hace falta mucha sal.</p>
                </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
                <FaUserCircle size='40px'/>
                <div className="flex flex-col">
                    <h1 className="font-semibold">Maria de Jesus</h1>
                    <p>Los meseros pueden llegar a ser groseros, recomiendo mejor capacitacion para una mejor experiencia para los clientes.</p>
                </div>
            </div>
        </div>
    )
}

export default LargeCard;