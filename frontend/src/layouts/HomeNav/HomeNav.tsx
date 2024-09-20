import {Link} from "react-router-dom"

const HomeNav = () => {
    return(
        <nav className="sticky top-0 z-30  border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <div className="flex flex-col items-center">
            <div className="grid grid-cols-3 pt-4 pb-2 gap-32 ">
                <Link to='/' className="text-3xl text-green font-bold pl-14 pt-2">AutoBot</Link>
                <div className="flex justify-center gap-10 pt-2">
                    <Link to='/pricing' className="font-semibold">Precios</Link>
                    <Link to='/Blog' className="font-semibold">Blog</Link>
                </div>
                <div className="flex justify-end pr-14 gap-10">
                    <Link to='/Login' className="p-2 font-semibold">Iniciar Sesion</Link>
                    <Link to='/register' className="bg-green text-white rounded-md font-semibold px-4 py-2">Empieza →</Link>
                </div>
            </div>
            </div>
        </nav>
    );
}

export default HomeNav;