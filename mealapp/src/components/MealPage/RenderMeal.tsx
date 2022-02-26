import Image from 'next/image'
import React from 'react'

import { TMealData } from "../../types/Meal"

import { PageHeading } from '../UI/PageHeading'

type MealProps = {
    Meal: TMealData
}

export const RenderMeal:React.FC<MealProps> = ({ Meal }: MealProps) => {

    const { strMeal, strMealThumb, strInstructions, strYoutube, strTags, strArea, strCategory } = Meal

    // Extract each step by splitting instructions by line spaces
    const eachStep = strInstructions.split("\r\n")

    // Remove empty items from Array
    const steps = eachStep.filter((a) => a)

    return (
        <>
            <PageHeading text={'Our recipie for ' + strMeal} />
            <div className="grid gap-12 xl:grid-cols-2 lg:grid-cols-1">
                <div className="relative">
                    <Image src={strMealThumb} layout="responsive" width="400" height="400" objectFit="cover" alt={'A Photo of ' + strMeal} />
                    { strArea && ( <><h2 className="text-2xl mt-12 mb-4 font-serif">Area</h2><p>{ strArea }</p></> ) }
                    { strCategory && ( <><h2 className="text-2xl mt-12 mb-4 font-serif">Category</h2><p>{ strCategory }</p></> ) }
                    { strTags && ( <><h2 className="text-2xl mb-4 mt-12 font-serif">Tags</h2><p>{ strTags }</p></> ) }
                </div>
                <div>
                    { strYoutube && (
                        <>
                            <h2 className="text-2xl mb-4 font-serif">Watch Video Instructions</h2>
                            <iframe width="100%" height="350" src={strYoutube.replace('watch?v=','embed/')} title="YouTube video player" className="mb-12" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
                        </>
                    )}
                    <h2 className="text-2xl mb-4 font-serif">Instructions</h2>
                    <ul className="list-decimal px-8">
                        {steps && steps.map((item, key) =>
                            <li key={key}>{item}</li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )

}