import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { RenderMeal } from '../../components/MealPage/RenderMeal'
import { Loader } from '../../components/UI/Loader'
import { Header } from '../../components/UI/Header'
import { PageHeading } from '../../components/UI/PageHeading'
import { Footer } from '../../components/UI/Footer'

import { IMealData, IMealResponse } from '../../interfaces/Meal'

const MealPage: NextPage = () => {

    const [meal, setMeal] = useState<IMealData>();
    const [isLoading, setIsLoading] = useState<Boolean>(false);

    const router = useRouter()
    const { mId } = router.query

    useEffect(() => {
      async function getMeal() {
        setIsLoading(true);
        await axios.request<IMealResponse>({
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
    <div className="bg-green-50 p-6">
      <Header />
      <main className="md:w-3/4 mx-auto">
        <div className="w-full mb-5">
            { isLoading ? <Loader /> : (
              <>
                { meal && (
                <>
                  <PageHeading text={'Our recipie for ' + meal.strMeal} />
                  <RenderMeal Meal={meal} /> 
                </>
                )
                }
              </>
            )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default MealPage