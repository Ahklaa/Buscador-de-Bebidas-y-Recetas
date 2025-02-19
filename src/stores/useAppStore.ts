import {create} from'zustand'
import { createRecipesSlices, RecipeSlicesType } from './recipeSlice'
import { createFavoriteSlice, FavoriteSliceType } from './favoriteSlice'
import { devtools } from 'zustand/middleware'

export const useAppStore = create<RecipeSlicesType & FavoriteSliceType>()(devtools((...a) => ({
    ...createRecipesSlices(...a),
    ...createFavoriteSlice(...a)
})))