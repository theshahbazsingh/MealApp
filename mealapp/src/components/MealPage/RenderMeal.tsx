import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { TMealData } from "../../types/Meal"

import { PageHeading } from '../UI/typography/PageHeading'
import { SectionHeading } from '../UI/typography/SectionHeading'
import { YTEmbed } from '../UI/other/YTEmbed'

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
            <div className="grid gap-12 xl:grid-cols-5 lg:grid-cols-1">
                <div className="relative col-span-2">
                    <Image src={strMealThumb} layout="responsive" width="400" height="400" objectFit="cover" alt={'A Photo of ' + strMeal} />
                    <div className="grid gap-6 grid-cols-3">
                        { strArea && ( <div><h2 className="text-2xl mt-6 mb-2 font-serif">Area</h2><p>{ strArea }</p></div> ) }
                        { strCategory && ( <div><h2 className="text-2xl mt-6 mb-2 font-serif">Category</h2><Link href={`/category/${strCategory}`}><a className="text-blue-500">{ strCategory }</a></Link></div> ) }
                        { strTags && ( <div><h2 className="text-2xl mb-2 mt-6 font-serif">Tags</h2><p>{ strTags.replace(',',', ') }</p></div> ) }
                    </div>
                </div>
                <div className="col-span-3">
                    { strYoutube && (
                        <>
                            <SectionHeading text="Video Instructions" />
                            <YTEmbed vidUrl={strYoutube.replace('watch?v=','embed/')} />
                        </>
                    )}
                    <SectionHeading text="Instructions" />
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