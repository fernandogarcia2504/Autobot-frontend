import React from "react";

import CreateUserButton from "../../../components/buttons/AddButton";
import ContainerCard from "../../../components/cards/AuthCards/ContainerCard";

const ConversationsPage = () => {
    return (
        <div className="flex flex-col flex-grow pt-12 pl-12 h-full"> 
            <div>
                <CreateUserButton title="Mandar mensaje a nuevo usuario" />
            </div>
            <div className="mt-6 flex-grow pb-6"> 
                <ContainerCard title="Tu chatbot no ha mandado mensaje a ningun usuario." />
            </div>
        </div>
    );
}


export default ConversationsPage;