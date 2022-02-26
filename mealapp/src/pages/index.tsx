import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import axios from 'axios'
import Head from 'next/head'

import { Loader } from '../components/ui/other/Loader'
import { PageHeading } from '../components/ui/typography/PageHeading'
import { RenderCategories } from '../components/pages/RenderCategories'

import { TCategoriesData, TCategoriesResponse } from '../types/Categories'

const CategoriesPage: NextPage = () => {
  
  const [categoriesData, setCategoriesData] = useState<Array<TCategoriesData>>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [isError, setIsError] = useState<Boolean>(false);

  // get a list of all categories
  useEffect(() => {
    async function getCategories() {
      setIsLoading(true);
      await axios.request<TCategoriesResponse>({
          url: 'https://www.themealdb.com/api/json/v1/1/categories.php',
        }).then((response: any) => {
          // store categories object from response into State
          setCategoriesData(response.data.categories);
      }).catch((e: Error) => {
          console.log(e);
          setIsError(true)
      }).finally(()=> {
          setIsLoading(false);
      });
    };
    getCategories()
  }, [])

  if (isLoading) {
    return  <Loader />
  }

  // check if axios returned erros or empty categories state
  if (isError || !categoriesData) {
    return <div>Error</div>
  }

  return (
    <>
      <Head>
        <title>MealApp | You hungry?</title>
      </Head>
      <PageHeading text="Select a category to view recipies :)" />
      <RenderCategories Categories={categoriesData} />
    </>
  )
  
}

export default CategoriesPage