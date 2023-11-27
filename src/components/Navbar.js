const Navbar = () => {
    return(
        <nav className="border border-b-2 p-4">
            <div className="flex">
                <div>
                  <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/airbnb_logo_icon_170605.png" className="w-10 ml-4" alt="logo"/>
                </div>
                <div className="flex text-red-500 text-xl ml-1 font-medium items-center">airbnb</div>
            </div>
        </nav>
    )
}

export default Navbar;