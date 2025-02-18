import axios from "axios"
import { CategoriesApiResponseSchema } from "../utils/recipes-schema"
import { SearchFilter } from "../types"
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
    console.log(data);
}