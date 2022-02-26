import type { NextPage } from 'next'
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router'

import { RenderMealsByCategory } from '../../components/MealsByCategoryPage/RenderMealsByCategory'
import { Loader } from '../../components/UI/other/Loader';

import { TMealsByCategoryData, TMealsByCategoryResponse } from "../../types/MealsByCategory";

const MealsByCategoryPage: NextPage = () => {

  const router = useRouter()
  const { cname } = router.query

  const [meals, setMeals] = useState<Array<TMealsByCategoryData>>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [isError, setIsError] = useState<Boolean>(false);

  useEffect(() => {
    const getCategories = async () => {
      setIsLoading(true);
      await axios.request<TMealsByCategoryResponse>({
          url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + cname,
        }).then((response: any) => {
          setMeals(response.data.meals);
      }).catch((e: Error) => {
          console.log(e);
          setIsError(true)
      }).finally(()=> {
        setIsLoading(false);
      });
    };
    getCategories()
  }, [cname])

  if (isLoading) {
    return  <Loader />
  }

  if (isError || !cname) {
    return <div>Error</div>
  }

  return <RenderMealsByCategory category={cname.toString()} Meals={meals} />

}

export default MealsByCategoryPage