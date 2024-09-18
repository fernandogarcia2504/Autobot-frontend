import React from "react";

import { FaPlus } from "react-icons/fa6";

const SettingsCard = () => {
    return(
        <div className="">
            <div>
                <p>Agregar metodo de pago</p>
                <button>
                    <FaPlus />
                </button>
            </div>
            <div>
                <form action="">
                    <p>Cambiar nombre de usuario</p>
                    <input type="text" placeholder="  Nuevo nombre de usuario..."/>
                    <button>Aplicar</button>
                </form>
            </div>
        </div>
    )
}

export default SettingsCard;