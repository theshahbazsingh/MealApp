import { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import axios from "axios";

import { Loader } from '../components/UI/Loader';

import { TCategoriesData, TCategoriesResponse } from "../types/Categories";
import { RenderCategories } from '../components/CategoriesPage/RenderCategories';

const HomePage: NextPage = () => {
  
  const [categories, setCategories] = useState<Array<TCategoriesData>>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  useEffect(() => {
    async function getCategories() {
      setIsLoading(true);
      await axios.request<TCategoriesResponse>({
          url: 'https://www.themealdb.com/api/json/v1/1/categories.php',
        }).then((response: any) => {
          setCategories(response.data.categories);
          setIsLoading(false);
      })
        .catch((e: Error) => {
          console.log(e);
      });
    };
    getCategories()
  }, [])

  return (
    <>
      { isLoading ? <Loader /> : <RenderCategories Categories={categories} /> }
    </>
  )
}

export default HomePage