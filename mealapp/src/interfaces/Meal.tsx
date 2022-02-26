export interface IMealData {
    idMeal: number
    strMeal: string
    strMealThumb: string
    strInstructions: string
    strYoutube?: string
}

export interface IMealResponse {
    data: IMealData
}