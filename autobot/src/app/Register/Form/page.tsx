import RegisterCard from "@/components/registerCard";

const Form = () => {
    return (
        <div className=" flex flex-col pt-40 min-h-screen items-center">
            <h1 className="text-green font-bold text-3xl pb-12">Empieza con nosotros lo antes posible...</h1>
            <RegisterCard/>
            <p className="pt-12">Ya tienes una cuenta con nosotros?<a href="../../Login" className="text-green"> Inicia Sesion Aqui</a></p>
        </div>
    )
}

export default Form;