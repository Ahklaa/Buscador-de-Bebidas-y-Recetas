import { Drink } from "../types" 
import { useAppStore } from "../stores/useAppStore"
type DrinkCardProps = {
    drink : Drink
}
export default function DrinkCard({drink} : DrinkCardProps) {
   const selectRecipe = useAppStore((state) => state.selectRecipe)
  return (
    <div className="shadow-lg  border ">
        <div className="overflow-hidden ">
            <img src={drink.strDrinkThumb} alt={`Imagen de ${drink.strDrink}`}
            className="hover:scale-125 hover:rotate-12 transition-transform" />
        </div>
        <div className="p-5">
            <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
            <button className="p-3 text-white bg-yellow-600 hover:bg-yellow-700 mt-5 w-full font-bold"
                onClick={() =>  selectRecipe(drink.idDrink)}
            >Ver Receta</button>
        </div>

    </div>
  )
}
