import Link from 'next/link';
import { ICategoryData } from "../../interfaces/Category";

interface CategoryProps {
    meals: ICategoryData[]
}

export const Category: React.FC<CategoryProps> = ({ meals } : CategoryProps) => {

    return (
        <>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-12">
                {meals && meals.map((meal, index) => (
                    <>
                    <Link href={`/meal/${meal.idMeal}`} passHref>
                        <a>
                            <div className='bg-cover bg-center mb gap-8 h-96 relative cursor-pointer hover:-translate-y-1 hover:scale-104 duration-200 shadow-md hover:shadow-lg' style={{backgroundImage:`url(${meal.strMealThumb})`}} key={index}>
                                <div className="absolute bottom-0 left-0 w-full pt-4 pl-4 text-center bg-black bg-opacity-10 backdrop-blur backdrop-brightness-50">
                                    <h3 className='text-3xl mb-4 text-white'>{meal.strMeal}</h3>
                                </div>
                            </div>
                        </a>
                    </Link>
                    </>
                ))}
            </div>
        </>
    )
}