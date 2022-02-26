import { ICategoryData } from "../../interfaces/Category";
import { MealCard } from "./MealCard";

interface CategoryProps {
    Meals: ICategoryData[]
}

export const RenderCategory: React.FC<CategoryProps> = ({ Meals } : CategoryProps) => {
    return (
        <>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-12">
                { Meals && Meals.length > 0 ? Meals.map((meal, index) => (
                    <MealCard Meal={meal} key={index} />
                )) : "Looks like somebody's gonna be hungry forever since they be messin' with my app. :(" }
            </div>
        </>
    )
}