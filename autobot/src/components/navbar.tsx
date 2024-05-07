import Link from "next/link";


const Navbar = () => {
    return(
        <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <div className="grid grid-cols-3 pt-4 pb-2 px-60 ">
                <h1 className="pl-14 pt-2">Logo</h1>
                <div className="flex justify-center gap-10 pt-2">
                    <Link href='/Register' className="font-semibold">Pricing</Link>
                    <p className="font-semibold">Blog</p>
                </div>
                <div className="flex justify-end pr-14 gap-10">
                    <Link href='/Login' className="p-2 font-semibold">Login</Link>
                    <Link href='/Register/Form' className="bg-green text-white rounded-md font-semibold p-2">Get Started</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;