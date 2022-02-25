export interface IMealData {
    idMeal: number
    strMeal: string
    strMealThumb: string
    strInstructions: string
}

export interface IMealResponse {
    data: IMealData
}