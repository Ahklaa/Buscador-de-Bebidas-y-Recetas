import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipesServices"
import { Categories } from "../types"

export type RecipeSlicesType = {
    categories : Categories
    fetchCategories: () => Promise<void>
}
export const createRecipesSlices : StateCreator<RecipeSlicesType> = (set) => ({
    categories : {
        drinks : []
    },
    fetchCategories : async () => {
        const categories = await getCategories()
        set(() => ({
            categories
        }))
    }
})