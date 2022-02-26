import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { RenderMeal } from '../../components/MealPage/RenderMeal'
import { Loader } from '../../components/UI/Loader'

import { TMealData, TMealResponse } from '../../types/Meal'

const MealPage: NextPage = () => {

    const [meal, setMeal] = useState<TMealData>();
    const [isLoading, setIsLoading] = useState<Boolean>(false);

    const router = useRouter()
    const { mId } = router.query

    useEffect(() => {
      async function getMeal() {
        setIsLoading(true);
        await axios.request<TMealResponse>({
            url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mId,
          }).then((response: any) => {
            setMeal(response.data.meals[0]);
            setIsLoading(false);
        })
          .catch((e: Error) => {
            console.log("Error:" + e);
        });
      };
      getMeal()
    }, [mId])

  return (
    <>
      { isLoading ? <Loader /> : (
        <>
          { meal && ( <RenderMeal Meal={meal} /> )}
        </>
      )}
    </>
  )
}

export default MealPage