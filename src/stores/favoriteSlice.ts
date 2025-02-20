import { Recipe } from "../types"
import { StateCreator } from "zustand"
import { createRecipesSlices, RecipeSlicesType } from "./recipeSlice"
export type FavoriteSliceType = {
    favorites : Recipe[],
    handleClickFavorite : (recipe : Recipe) => void,
    favoriteExist : (id : Recipe['idDrink']) => boolean,
    loadFromStorage : () => void
}

export const createFavoriteSlice : StateCreator<FavoriteSliceType & RecipeSlicesType,[],[],FavoriteSliceType> = (set , get,api) => ({
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
        createRecipesSlices(set,get,api).closeModal()
        localStorage.setItem("favorites",JSON.stringify(get().favorites))
    },
    favoriteExist : (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },
    
    loadFromStorage : () => {
        const storageFavorites  = localStorage.getItem('favorites')
        if(storageFavorites){
            set({
                favorites : JSON.parse(storageFavorites)
            })
        }

    }
})