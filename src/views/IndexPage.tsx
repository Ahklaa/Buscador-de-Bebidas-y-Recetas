import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard"
export default function IndexPage() {
  const drinks = useAppStore((state)=> state.drinks)
  const hasDrinks = useMemo(()=> drinks.drinks.length,[drinks])
  return (
    <>
        <h1 className="text-6xl font-extrabold">Recetas</h1>
        {hasDrinks ? (
          <div className="grid grid-cols-1 mx-10  md:grid-cols-3 2xl:grid-cols-4 my-10 gap-10">
              {drinks.drinks.map((drink) => (
                <DrinkCard 
                  key={drink.idDrink}
                  drink = {drink}
                />
            ))}
          </div>
            
        ) : (
            <p className="text-center my-10 text-2xl">No hay recetas para mostrar, utiliza el formulario para buscar recetas</p>
        )}
    </>
  )
}
