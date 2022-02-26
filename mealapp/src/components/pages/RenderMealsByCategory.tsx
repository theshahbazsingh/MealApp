import { TMealsByCategoryData } from "../../types/MealsByCategory";

import { MealCard } from "../ui/cards/MealCard";

type RenderMealsByCategoryProps = {
    // Only accept array of TMealsByCategoryData objects
    Meals: TMealsByCategoryData[]
}

export const RenderMealsByCategory: React.FC<RenderMealsByCategoryProps> = ({ Meals } : RenderMealsByCategoryProps) => {
    return (
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-12">
            { Meals && Meals.length > 0 ? Meals.map((meal, index) => (
                <MealCard title={meal.strMeal} imgUrl={meal.strMealThumb} linkUrl={`/meal/${meal.idMeal}`} key={index} />
            )) : "Looks like somebody's gonna be hungry forever since they be messin' with my app. :(" }
        </div>
    )
}