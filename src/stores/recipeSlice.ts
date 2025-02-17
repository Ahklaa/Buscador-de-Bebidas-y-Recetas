import { StateCreator } from "zustand"

type Category = {}
export type RecipeSlicesType = {
    categories : Category[]
}
export const createRecipesSlices : StateCreator<RecipeSlicesType> = () => ({
    categories : []
})