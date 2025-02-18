import {z} from 'zod'
import { CategoriesApiResponseSchema,DrinksApiResponse,SearchFilterSchema,DrinkApiResponse,RecipeAPIResponseSchema } from '../utils/recipes-schema'
export type Categories = z.infer<typeof CategoriesApiResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof  DrinksApiResponse>
export type Drink = z.infer<typeof  DrinkApiResponse>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema >