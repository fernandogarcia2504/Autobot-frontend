import React from "react";

import { IContainerCard } from "./types";

const ContainerCard = (props:IContainerCard) => {
    return (
        <div className="flex flex-grow w-4/5 h-full items-center justify-center bg-[#b4b4b8] rounded-md shadow-lg">
            <p>{props.title}</p>
        </div>
    );
}

export default ContainerCard;
