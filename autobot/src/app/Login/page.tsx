const Login = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="border shadow-2xl rounded-lg flex flex-col pt-12 pb-12 px-5 max-w-sm">
                <form>
                    <div className="grid grid-rows-5 gap-5">
                        <h2 className="font-bold text-3xl ">Iniciar Sesión</h2>
                        <h3 className="font-semibold text-l">Sigue aumentando las posibilidades de tu negocio.</h3>
                        <input className="border border-black rounded-md place" type="text" placeholder="  Correo o nombre de usuario" />
                        <input className="border border-black rounded-md " type="password" placeholder="  Contraseña" />
                        <a href="" className="text-green">¿Olvidaste tu contraseña?</a>
                    </div>
                    <div className="flex flex-col items-center pt-8">
                        <button className="bg-green text-white py-2 px-16 mb-12 rounded-2xl">Iniciar sesión</button>
                        <p className="">Nuevo en autobot? <a href='/Register'className="text-green">Regístrate aquí</a></p>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Login;