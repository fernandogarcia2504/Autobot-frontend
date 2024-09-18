import React from "react";
import { IAddButton } from "./types";

import { FaPlus } from "react-icons/fa6";

const AddButton = (props: IAddButton) => {
    return(
        <div className="flex flex-row items-center gap-6 px-3 border border-gray rounded-md shadow-md w-fit h-12">
            <h1 className="text-xl">{props.title}</h1>
            <button className="items-end">
                <FaPlus />
            </button>
        </div>
    )
}

export default AddButton;