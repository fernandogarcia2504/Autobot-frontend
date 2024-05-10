import Link from "next/link";


const Navbar = () => {
    return(
        <nav className="sticky top-0 z-30  border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <div className="flex flex-col items-center">
            <div className="grid grid-cols-3 pt-4 pb-2 gap-32 ">
                <h1 className="pl-14 pt-2">Logo</h1>
                <div className="flex justify-center gap-10 pt-2">
                    <Link href='/Register' className="font-semibold">Precios</Link>
                    <Link href='/Blog' className="font-semibold">Blog</Link>
                </div>
                <div className="flex justify-end pr-14 gap-10">
                    <Link href='/Login' className="p-2 font-semibold">Iniciar Sesion</Link>
                    <Link href='/Register/Form' className="bg-green text-white rounded-md font-semibold p-2">Empieza {'->'}</Link>
                </div>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;