import { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import axios from "axios";

import { Loader } from '../components/UI/other/Loader';

import { TCategoriesData, TCategoriesResponse } from "../types/Categories";
import { RenderCategories } from '../components/CategoriesPage/RenderCategories';

const CategoriesPage: NextPage = () => {
  
  const [categories, setCategories] = useState<Array<TCategoriesData>>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [isError, setIsError] = useState<Boolean>(false);

  useEffect(() => {
    async function getCategories() {
      setIsLoading(true);
      await axios.request<TCategoriesResponse>({
          url: 'https://www.themealdb.com/api/json/v1/1/categories.php',
        }).then((response: any) => {
          setCategories(response.data.categories);
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

  if (isError || !categories) {
    return <div>Error</div>
  }

  return <RenderCategories Categories={categories} />
  
}

export default CategoriesPage