import {create} from'zustand'
import { createRecipesSlices, RecipeSlicesType } from './recipeSlice'
import { createFavoriteSlice, FavoriteSliceType } from './favoriteSlice'
import { devtools } from 'zustand/middleware'
import { createNotificationSlice, NotificationSliceType } from './notificationSlice'

export const useAppStore = create<RecipeSlicesType & FavoriteSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipesSlices(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a)
})))