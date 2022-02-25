import type { NextPage } from 'next'
import { Footer } from '../../components/UI/Footer'
import { Header } from '../../components/UI/Header'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { IMealData, IMealResponse } from '../../interfaces/Meal'
import { Meal } from '../../components/MealPage/Meal'
import { Loader } from '../../components/UI/Loader'
import { PageHeading } from '../../components/UI/PageHeading'

const MealPage: NextPage = () => {

    const [meal, setMeal] = useState<IMealData>();
    const [loading, setLoading] = useState<Boolean>(false);

    const router = useRouter()
    const { mId } = router.query

    useEffect(() => {
      async function getMeal() {
        setLoading(true);
        await axios.request<IMealResponse>({
            url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mId,
          }).then((response: any) => {
            setMeal(response.data.meals[0]);
            setLoading(false);
        })
          .catch((e: Error) => {
            console.log(e);
        });
      };
      getMeal()
    }, [mId])

  return (
    <div className="bg-green-50 p-6">
      <Header />
      <main className="md:w-3/4 mx-auto">
        <div className="w-full mb-5">
            { loading ? <Loader /> : (
              <>
                <PageHeading text={"Our recipie for " + meal?.strMeal} />
                { meal && <Meal meal={meal} /> }
              </>
            )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default MealPage