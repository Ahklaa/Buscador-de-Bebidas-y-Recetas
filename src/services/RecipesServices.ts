import axios from "axios"
import { CategoriesApiResponseSchema, DrinksApiResponse, RecipeAPIResponseSchema } from "../utils/recipes-schema"
import { Drink, SearchFilter } from "../types"
export async function getCategories(){
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    const {data} = await axios.get(url) 
    const response = CategoriesApiResponseSchema.safeParse(data)
    if(response.success){
        return response.data
    }
    
}

export async function getRecipes(filter : SearchFilter){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter.category}&i=${filter.ingredient}`
    const {data}  = await axios.get(url)
    const response = DrinksApiResponse.safeParse(data)
    if(response.success){
        return response.data
    }
}

export async function getRecipe(id : Drink['idDrink']){
       const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
       const { data } = await axios.get(url)
       const response =  RecipeAPIResponseSchema.safeParse(data.drinks[0])
       if (response.success){
        return response.data
       }
}