import { StateCreator } from "zustand"
import { getCategories, getRecipe, getRecipes } from "../services/RecipesServices"
import { Categories, Drinks, SearchFilter,Drink ,Recipe} from "../types"

export type RecipeSlicesType = {
    categories : Categories,
    drinks : Drinks,
    selectedRecipe : Recipe,
    modal : boolean,
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilter : SearchFilter) => Promise<void>
    selectRecipe: (id : Drink['idDrink'] ) => Promise<void>,
    closeModal : () => void
}
export const createRecipesSlices : StateCreator<RecipeSlicesType> = (set) => ({
    categories : {
        drinks : []
    },
    drinks : {
        drinks : []
    },
    modal : false,
    selectedRecipe : {} as Recipe,
    fetchCategories : async () => {
        const categories = await getCategories()
        set(() => ({
            categories
        }))
    },
    searchRecipes : async (filters) => {
        const drinks = await getRecipes(filters)
        set(() => ({
            drinks
        }))
    },
    selectRecipe : async (id) => {
        const selectedRecipe = await getRecipe(id)
        set({
            selectedRecipe,
            modal : true
        })
    },
    closeModal : () => {
        set({
            modal : false,
            selectedRecipe : {} as Recipe
        })
    }
})