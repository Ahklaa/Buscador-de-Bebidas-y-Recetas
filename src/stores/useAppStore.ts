import {create} from'zustand'
import { createRecipesSlices, RecipeSlicesType } from './recipeSlice'

export const useAppStore = create<RecipeSlicesType>((...a) => ({
    ...createRecipesSlices(...a)
}))