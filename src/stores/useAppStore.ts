import {create} from'zustand'
import { createRecipesSlices, RecipeSlicesType } from './recipeSlice'
import { devtools } from 'zustand/middleware'

export const useAppStore = create<RecipeSlicesType>()(devtools((...a) => ({
    ...createRecipesSlices(...a)
})))