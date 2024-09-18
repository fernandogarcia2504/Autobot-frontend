import React from "react";
import CreateUserButton from "../../../components/buttons/AddButton";
import ContainerCard from "../../../components/cards/AuthCards/ContainerCard";

const UsersPage = () => {
    return (
        <div className="flex flex-col flex-grow pt-12 pl-12 h-full"> {/* Add min-h-full here */}
            <div>
                <CreateUserButton title="Registrar nuevo usuario" />
            </div>
            <div className="mt-6 flex-grow pb-6"> {/* Allow this div to grow */}
                <ContainerCard title="No hay usuarios registrados"/>
            </div>
        </div>
    );
}

export default UsersPage;
