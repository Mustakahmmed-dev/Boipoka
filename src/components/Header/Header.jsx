import { useState } from "react";
import { NavLink } from "react-router";

// Icons
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";


const navLinksArr = [
    { id: 1, name: "Listed Books", link: "listed-books" },
    { id: 2, name: "Pages to read", link: "pages-to-read" },
]

const links = <ul className="flex flex-col md:flex-row items-center">
    <NavLink className="mr-4" to="/">Home</NavLink>
    {
        navLinksArr.map(navLink => <NavLink to={`/${navLink.link}`} className="mr-4"> {navLink.name} </NavLink>)
    }
</ul>;

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className=" md:max-w-10/12 mx-auto flex justify-between p-4">
            <div className="">
                <h2 className="text-2xl hidden md:block font-bold">Book Vibe</h2>
                <div className="md:hidden">
                    <button onClick={() => setOpen(!open)}> {open ? <IoMdClose size={40} /> : <HiMenuAlt1 size={40} />} </button>

                </div>
                <div className={`md:hidden absolute -top-40 transition-all ${open && "top-14 bg-slate-200 min-w-[200px] p-4 rounded"}`}>
                    {open && links }
                </div>
            </div>

            <div className="hidden md:block">
                {
                    links
                }
            </div>
            <div>
                <button className="btn btn-success mr-2 text-white font-semibold">Sign In</button>
                <button className="btn btn-info text-white font-semibold" >Signup</button>
            </div>
        </nav>
    )
}

export default Header;