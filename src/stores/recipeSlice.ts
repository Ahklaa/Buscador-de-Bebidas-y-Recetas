import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipesServices"

type Category = {}
export type RecipeSlicesType = {
    categories : Category[]
    fetchCategories: () => Promise<void>
}
export const createRecipesSlices : StateCreator<RecipeSlicesType> = () => ({
    categories : [],
    fetchCategories : async () => {
     getCategories()
    }
})