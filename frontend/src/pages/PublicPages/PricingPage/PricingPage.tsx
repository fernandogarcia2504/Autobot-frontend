import PricingCard from "../../../components/cards/PublicCards/PricingCard/PricingCard";

const PricingPage  = () => {
    return(
        <div className="flex flex-col min-h-screen items-center pt-24 ">
            <h1 className="text-3xl text-green font-bold mb-4">Precios</h1>
            <h3 className="font-semibold mb-10">Ajusta tu membresia de acuerdo con las necesidades de tu negocio.</h3>
            <div className="flex items-center gap-5 sm:flex-col  ">
                <PricingCard  title="Basico" price={500}/>
                <PricingCard title="Premium" price={750}/>
            </div>
            <p className="pt-12">Ya tienes una cuenta con nosotros?<a href="Login" className="text-green"> Inicia Sesion Aqui</a></p>
        </div>
    );
}

export default PricingPage;