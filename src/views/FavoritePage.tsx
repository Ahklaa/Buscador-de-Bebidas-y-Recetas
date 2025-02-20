import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"
export default function FavoritePage() {
  const favorites = useAppStore((state) => state.favorites)
  const hasFavorites = useMemo(() => favorites.length ,[favorites])
  return (
       <>
        <h1 className="text-6xl font-extrabold">Favoritos</h1>
       {hasFavorites ?(
         <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4  gap-10 my-10">
         {favorites.map(drink => (
           <DrinkCard key={drink.idDrink} drink={drink} />
         ))}
       </div>
       )  : (
        <p className="text-center text-2xl my-10">No hay favoritos agregados</p>
       )}
       </>
  )
}
