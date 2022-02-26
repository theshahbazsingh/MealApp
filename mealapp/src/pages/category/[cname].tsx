import type { NextPage } from 'next'
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router'

import { RenderMealsByCategory } from '../../components/MealsByCategoryPage/RenderMealsByCategory'
import { Loader } from '../../components/UI/Loader';
import { PageHeading } from '../../components/UI/PageHeading';

import { TMealsByCategoryData, TMealsByCategoryResponse } from "../../types/MealsByCategory";

const CategoryPage: NextPage = () => {

  const router = useRouter()
  const { cname } = router.query

  const [meals, setMeals] = useState<Array<TMealsByCategoryData>>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  useEffect(() => {
    async function getCategories() {
      setIsLoading(true);
      await axios.request<TMealsByCategoryResponse>({
          url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + cname,
        }).then((response: any) => {
          setMeals(response.data.meals);
          setIsLoading(false);
      })
        .catch((e: Error) => {
          console.log(e);
      });
    };
    getCategories()
  }, [cname])

  return (
    <>
      { isLoading ? <Loader /> : (
        <>
          <PageHeading text={'Category: ' + cname} />
          <RenderMealsByCategory Meals={meals} />
        </>
      )}
    </>
  )
}

export default CategoryPage