import Image from 'next/image'
import React from 'react'

import { IMealData } from "../../interfaces/Meal"

interface MealProps {
    Meal: IMealData
}

export const RenderMeal:React.FC<MealProps> = ({ Meal }: MealProps) => {

    const { strMeal, strMealThumb, strInstructions, strYoutube } = Meal

    const steps = strInstructions.split("\r\n")

    return (
        <>
            <div className="grid gap-12 xl:grid-cols-2 lg:grid-cols-1">
                <div className="relative">
                    <Image src={strMealThumb} layout="responsive" width="400" height="400" objectFit="cover" alt={'A Photo of ' + strMeal} />
                </div>
                <div>
                    { strYoutube && <iframe width="100%" height="350" src={strYoutube.replace('watch?v=','embed/')} title="YouTube video player" className="mb-12" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> }
                    <h3 className="text-3xl mb-4 font-serif">Instructions</h3>
                    <ul className="list-decimal">
                        {steps?.map((item, key) =>
                            <li key={key}><p>{item}</p></li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )

}