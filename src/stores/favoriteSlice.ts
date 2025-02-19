import { Recipe } from "../types"
import { StateCreator } from "zustand"
export type FavoriteSliceType = {
    favorites : Recipe[],
    handleClickFavorite : (recipe : Recipe) => void,
    favoriteExist : (id : Recipe['idDrink']) => boolean
}

export const createFavoriteSlice : StateCreator<FavoriteSliceType> = (set , get) => ({
    favorites : [],
    handleClickFavorite : (recipe) => {
        if(get().favoriteExist(recipe.idDrink)){
            set((state) =>({
                favorites : state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }) )
        }else{
            set((state) => ({
                favorites : [...state.favorites, recipe]
            }))
        }
    },
    favoriteExist : (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    }
})