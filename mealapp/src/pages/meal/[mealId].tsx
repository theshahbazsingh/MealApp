import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Head from 'next/head'

import { RenderMeal } from '../../components/pages/RenderMeal'
import { Loader } from '../../components/ui/other/Loader'
import { PageHeading } from '../../components/ui/typography/PageHeading'

import { TMealData, TMealResponse } from '../../types/Meal'

const MealPage: NextPage = () => {

    const [mealData, setMealData] = useState<TMealData>();
    const [isLoading, setIsLoading] = useState<Boolean>(true);
    const [isError, setIsError] = useState<Boolean>(false);

    // extract Meal ID from URL
    const router = useRouter()
    const { mealId } = router.query

    // get details of the Meal from API
    useEffect(() => {

        setIsLoading(true);

        async function getMeal() {
            await axios.request<TMealResponse>({
                    url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealId,
                }).then((response: any) => {
                    // store only first (and last) meals object from response into State
                    setMealData(response.data.meals[0]);
                }).catch((e: Error) => {
                    console.log("Error:" + e)
                    setIsError(true)
                }).finally(()=> {
                    setIsLoading(false);
            });
        };

        getMeal();

    }, [mealId])

    if (isLoading) {
      return  <Loader />
    }

    // check if axios returned erros or empty meals state
    if (isError || !mealData) {
      return <div>Error</div>
    }

    return (
      <>
        <Head>
          <title>{mealData.strMeal} | MealApp</title>
        </Head>
        <PageHeading text={'Our recipie for ' + mealData.strMeal} />
        <RenderMeal Meal={mealData} />
      </>
    )

}

export default MealPage