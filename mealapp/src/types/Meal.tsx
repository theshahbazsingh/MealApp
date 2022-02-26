export type TMealData = {
    idMeal: number
    strMeal: string
    strMealThumb: string
    strInstructions: string
    strYoutube?: string
    strTags: string
    strArea: string
    strCategory: string
}

export type TMealResponse = {
    data: TMealData
}