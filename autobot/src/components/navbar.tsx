

const Navbar = () => {
    return(
        <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <div className="grid grid-cols-3 pt-4 pb-2 ">
                <h1 className="pl-14 pt-2">Logo</h1>
                <div className="flex justify-center gap-10 pt-2">
                    <p className="font-semibold">Pricing</p>
                    <p className="font-semibold">Blog</p>
                </div>
                <div className="flex justify-end pr-14 gap-10">
                    <p className="p-2 font-semibold">Login</p>
                    <button className="bg-green rounded-md font-semibold p-2">Get Started</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;