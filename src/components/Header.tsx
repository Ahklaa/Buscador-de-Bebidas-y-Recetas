import { Link, NavLink } from "react-router-dom"
export default function Header() {
  return (
    <header className="bg-slate-900">
        <div className="mx-auto container px-5 py-10">
            <div className="flex justify-between items-center">
                <div>
                    <img src="/logo.svg "className="w-22" alt="logo vino" />
                </div>
                <nav className="flex gap-5">
                    <NavLink 
                    to="/"
                    className={({isActive})=> isActive ? "uppercase text-orange-500 font-bold" : "uppercase text-white font-bold" }
                    >Inicio</NavLink>
                    <NavLink 
                    to="/Favoritos"
                    className={({isActive})=> isActive ? "uppercase text-orange-500 font-bold" : "uppercase text-white font-bold"}
                    >Favoritos</NavLink>
                </nav>
            </div>
        </div>
    </header>
  )
}

