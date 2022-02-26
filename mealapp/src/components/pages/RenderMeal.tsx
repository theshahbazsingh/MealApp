import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { TMealData } from '../../types/Meal'

import { SectionHeading } from '../ui/typography/SectionHeading'
import { YTEmbed } from '../ui/other/YTEmbed'

type MealProps = {
    // Only accept TMealData object
    Meal: TMealData
}

export const RenderMeal:React.FC<MealProps> = ({ Meal }: MealProps) => {

    const { strMeal, strMealThumb, strInstructions, strYoutube, strTags, strArea, strCategory } = Meal

    // Extract each step by splitting instructions by line spaces
    const eachStep = strInstructions.split("\r\n")

    // Remove empty items from Array
    const steps = eachStep.filter((a) => a)

    return (
            <div className="grid gap-12 xl:grid-cols-5 lg:grid-cols-1">
                <div className="relative col-span-2">

                    <Image src={strMealThumb} layout="responsive" width="400" height="400" objectFit="cover" alt={'A Photo of ' + strMeal} />

                    <div className="grid gap-6 grid-cols-3 mt-8">
                        {/** Only show specific tags if values are provided */}
                        { strArea && ( 
                            <div>
                                <SectionHeading text="Area" />
                                <p>{ strArea }</p>
                            </div>
                        )}
                        { strCategory && (
                            <div>
                                <SectionHeading text="Category" />
                                <Link href={`/category/${strCategory}`}>
                                    <a className="text-blue-600">{ strCategory }</a>
                                </Link>
                            </div>
                        )}
                        { strTags && (
                            <div>
                                <SectionHeading text="Tags" />
                                <p>{ strTags.replace(',',', ') }</p> {/** Add a space after comma (to wrap-text properly in browser) */}
                            </div>
                        )}

                    </div>
                </div>
                <div className="col-span-3">

                    {/** Show Youtube Embed only if URL is provided */}
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
    )

}