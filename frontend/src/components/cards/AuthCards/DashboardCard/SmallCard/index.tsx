import React from "react";
import { ISmallCard } from "./types";

import graph from '../../../../../assets/img/Rectangle 6 (2).png'

const SmallCard = (props:ISmallCard) => {
    return(
        <div className="border border-gray w-fit rounded-md shadow-lg px-3">
            <div className="border-b border-gray py-2 ">
                <h1 className="text-lg font-semibold">{props.title}</h1>
            </div>
            <img src={graph} alt="example graph that will change when fetching real data" />
        </div>
    )
}

export default SmallCard;