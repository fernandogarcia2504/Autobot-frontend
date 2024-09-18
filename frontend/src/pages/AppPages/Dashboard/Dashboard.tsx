import React from "react";
import SmallCard from "../../../components/cards/AuthCards/DashboardCard/SmallCard";
import LargeCard from "../../../components/cards/AuthCards/DashboardCard/LargeCard";

const DashboardPage = () => {
    return (
        <div className="flex flex-row flex-wrap gap-6 pt-12 pl-12">
            <SmallCard title="Nuevas Conversaciones" />
            <SmallCard title="Volumen de mensajes" />
            <SmallCard title="Tiempo de respuesta" />
            <SmallCard title="Satisfaccion del cliente" />
            <SmallCard title="Reservaciones" />
            <SmallCard title="Tasa de intervencion humana" />
            <LargeCard title="Feedback comments" />
            
        </div>
    )
}

export default DashboardPage;