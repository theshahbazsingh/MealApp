import { useEffect, useState } from "react"
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import axios from 'axios'

import { RenderMealsByCategory } from '../../components/pages/RenderMealsByCategory'
import { Loader } from '../../components/ui/other/Loader'
import { PageHeading } from '../../components/ui/typography/PageHeading'

import { TMealsByCategoryData, TMealsByCategoryResponse } from "../../types/MealsByCategory"

const MealsByCategoryPage: NextPage = () => {

  const [mealsData, setMealsData] = useState<Array<TMealsByCategoryData>>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [isError, setIsError] = useState<Boolean>(false);

  // extract Meal ID from URL
  const router = useRouter()
  const { categoryName } = router.query

  useEffect(() => {

    if (categoryName) {

      setIsLoading(true);

      const getCategories = async () => {
          await axios.request<TMealsByCategoryResponse>({
              url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + categoryName,
          }).then((response: any) => {
              // store all meals objects from response into State
              setMealsData(response.data.meals);
          }).catch((e: Error) => {
              console.log(e);
              setIsError(true)
          }).finally(()=> {
              setIsLoading(false);
          });
      };

      getCategories();

    }

  }, [categoryName])

  if (isLoading) {
    return  <Loader />
  }

  // check if axios returned erros or empty meals state or missing categoryName
  if (isError || !categoryName || !mealsData) {
    return <div>Error</div>
  }

  return (
    <>
      <Head>
        <title>{categoryName} | MealApp</title>
      </Head>
      <PageHeading text={'Category: ' + categoryName} />
      <RenderMealsByCategory Meals={mealsData} />
    </>
  )

}

export default MealsByCategoryPage