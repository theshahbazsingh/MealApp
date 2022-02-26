import { TMealsByCategoryData } from "../../types/MealsByCategory";

import { MealCard } from "../UI/cards/MealCard";
import { PageHeading } from "../UI/typography/PageHeading";

type RenderMealsByCategoryProps = {
    Meals: TMealsByCategoryData[]
    category: string
}

export const RenderMealsByCategory: React.FC<RenderMealsByCategoryProps> = ({ Meals, category } : RenderMealsByCategoryProps) => {
    return (
        <>
            <PageHeading text={'Category: ' + category} />
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-12">
                { Meals && Meals.length > 0 ? Meals.map((meal, index) => (
                    <MealCard title={meal.strMeal} imgUrl={meal.strMealThumb} linkUrl={`/meal/${meal.idMeal}`} key={index} />
                )) : "Looks like somebody's gonna be hungry forever since they be messin' with my app. :(" }
            </div>
        </>
    )
}