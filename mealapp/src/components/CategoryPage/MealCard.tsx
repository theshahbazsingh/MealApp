import Link from 'next/link';
import { ICategoryData } from "../../interfaces/Category";

interface MealCardProps {
    Meal: ICategoryData
}

export const MealCard: React.FC<MealCardProps> = ({Meal} : MealCardProps) => {

    const { strMeal, idMeal, strMealThumb } = Meal

    return (
        <Link href={`/meal/${idMeal}`} passHref>
            <a>
                <div className="bg-cover bg-center mb gap-8 h-96 relative cursor-pointer hover:-translate-y-1 hover:scale-104 duration-200 shadow-md hover:shadow-lg" style={{backgroundImage:`url(${strMealThumb})`}}>
                    <div className="absolute bottom-0 left-0 w-full pt-4 pl-4 text-center bg-black bg-opacity-10 backdrop-blur backdrop-brightness-50">
                        <h3 className="text-3xl mb-4 text-white">{strMeal}</h3>
                    </div>
                </div>
            </a>
        </Link>
    )
}