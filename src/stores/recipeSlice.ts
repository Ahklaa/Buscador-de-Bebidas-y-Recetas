import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipesServices"
import { Categories, SearchFilter } from "../types"

export type RecipeSlicesType = {
    categories : Categories
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilter : SearchFilter) => Promise<void>
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
    },
    searchRecipes : async (filters) => {
        getRecipes(filters)
    }   
})