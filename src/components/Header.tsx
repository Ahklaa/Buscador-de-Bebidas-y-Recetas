import { useEffect, useMemo } from "react"
import { NavLink,useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"
export default function Header() {
  const {pathname} = useLocation()
  const isHome =  useMemo(() => pathname === "/" ,[pathname])
  const fetchCategories = useAppStore((state) => state.fetchCategories)
    useEffect(()=> {
      fetchCategories()
    },[])
  return (
    <header className={isHome ? "headerImage" : "bg-slate-800"}>
        <div className="mx-auto container px-5 py-10">
            <div className="flex justify-between items-center">
                <div>
                    <img src="/logo.svg "className="w-22" alt="logo vino" />
                </div>
                <nav className="flex gap-5">
                    <NavLink 
                    to="/"
                    className={({isActive})=> isActive ? "uppercase text-yellow-800 font-bold" : "uppercase text-white font-bold" }
                    >Inicio</NavLink>
                    <NavLink 
                    to="/favoritos"
                    className={({isActive})=> isActive ? "uppercase text-yellow-800 font-bold" : "uppercase text-white font-bold"}
                    >Favoritos</NavLink>
                </nav>
            </div>

            {isHome && (
                <form className="md:w-1/2 2xl:w-1/3 space-y-6 my-32 bg-yellow-800 p-10 rounded-lg shadow  ">
                    <div className="space-y-4">
                      <label 
                      htmlFor="ingredient" 
                      className="block text-white uppercase font-extrabold text-lg">Nombre o Ingredientes</label>
                      <input 
                      type="text" 
                      name="ingredient"
                      id="ingredient" 
                      placeholder="Nombre del Ingrediente. Ej: Tequila, Vodka, Café"
                      className="p-3 w-full rounded-lg focus:outline-none bg-white" />
                    </div>
                    <div className="space-y-4">
                      <label 
                      htmlFor="category" 
                      className="block text-white uppercase font-extrabold text-lg">Categoria</label>
                      <select name="category" id="category" 
                      className="p-3 w-full rounded-lg focus:outline-none bg-white"> 
                        <option value="">--- Seleccione Categoria ---</option>
                      </select>
                    </div>
                    <input 
                    type="submit" 
                    value="Buscar Recetas"
                    className="text-white uppercase rounded-lg w-full font-extrabold bg-yellow-900 hover:bg-yellow-950 p-2"  />
                </form>
            )}
        </div>
    </header>
  )
}

