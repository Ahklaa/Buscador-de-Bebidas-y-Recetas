import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react"
import { NavLink,useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"
export default function Header() {
  const [searchFilter, setSearchIngredient] = useState({
    ingredient : "",
    category : ""
  })
  const {pathname} = useLocation()
  const isHome =  useMemo(() => pathname === "/" ,[pathname])
  const fetchCategories = useAppStore((state) => state.fetchCategories)
  const categories =  useAppStore((state) => state.categories)
  const searchRecipes =  useAppStore((state) => state.searchRecipes)
    useEffect(()=> {
      fetchCategories()
    },[])
  const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
    setSearchIngredient({
      ...searchFilter,
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if(Object.values(searchFilter).includes("")){
        console.log("todos los campos son obligatorios");
        return
      }
      searchRecipes(searchFilter)
  }
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
                <form className="md:w-1/2 2xl:w-1/3 space-y-6 my-32 bg-yellow-800 p-10 rounded-lg shadow "
                onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <label 
                      htmlFor="ingredient" 
                      className="block text-white uppercase font-extrabold text-lg">Nombre o Ingredientes</label>
                      <input 
                      type="text" 
                      name="ingredient"
                      id="ingredient" 
                      placeholder="Nombre del Ingrediente. Ej: Tequila, Vodka, Café"
                      className="p-3 w-full rounded-lg focus:outline-none bg-white" 
                      onChange={handleChange}
                      value={searchFilter.ingredient}/>
                    </div>
                    <div className="space-y-4">
                      <label 
                      htmlFor="category" 
                      className="block text-white uppercase font-extrabold text-lg">Categoria</label>
                      <select 
                      name="category"
                      id="category" 
                      className="p-3 w-full rounded-lg focus:outline-none bg-white"
                      onChange={handleChange}
                      value={searchFilter.category} > 
                        <option value="">--- Seleccione Categoria ---</option>
                        {categories.drinks.map(category => (
                          <option value={category.strCategory} key={category.strCategory}>{category.strCategory}</option>
                        ))}
                      </select>
                    </div>
                    <input 
                    type="submit" 
                    value="Buscar Recetas"
                    className="text-white uppercase rounded-lg w-full font-extrabold bg-yellow-900 hover:bg-yellow-950 p-2" 
                    />
                </form>
            )}
        </div>
    </header>
  )
}

