import { Recipe } from "../types"
import { StateCreator } from "zustand"
import { createRecipesSlices, RecipeSlicesType, } from "./recipeSlice"
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice"
export type FavoriteSliceType = {
    favorites : Recipe[],
    handleClickFavorite : (recipe : Recipe) => void,
    favoriteExist : (id : Recipe['idDrink']) => boolean,
    loadFromStorage : () => void
}

export const createFavoriteSlice : StateCreator<FavoriteSliceType & RecipeSlicesType & NotificationSliceType,[],[],FavoriteSliceType> = (set , get,api) => ({
    favorites : [],
    handleClickFavorite : (recipe) => {
        if(get().favoriteExist(recipe.idDrink)){
            set((state) =>({
                favorites : state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }) )

            createNotificationSlice(set,get,api).showNotification({
                text : "Se ha eliminado el elemento de favoritos",
                error : false
            })

        }else{
            set((state) => ({
                favorites : [...state.favorites, recipe]
            }))
            createNotificationSlice(set,get,api).showNotification({
                text : "Se ha agregado el elemento a favoritos",
                error : false
            })
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