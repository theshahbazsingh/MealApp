import { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import axios from "axios";

import { RenderCategoryList } from '../components/ListCategoriesPage/RenderListCategories'
import { Loader } from '../components/UI/Loader';
import { Header } from '../components/UI/Header'
import { PageHeading } from '../components/UI/PageHeading'
import { Footer } from '../components/UI/Footer'

import { ICatListData, ICatListResponse } from "../interfaces/ListCategories";

const HomePage: NextPage = () => {
  
  const [categories, setCategories] = useState<Array<ICatListData>>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  useEffect(() => {
    async function getCategories() {
      setIsLoading(true);
      await axios.request<ICatListResponse>({
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
    <div className="bg-green-50 p-6">
      <Header />
      <main className="md:w-3/4 mx-auto">
        <div className="w-full mb-5 rounded-lg">
          { isLoading ? <Loader /> : (
            <>
              <PageHeading text="Select a category to view recipies :)" />
              <RenderCategoryList Categories={categories} />
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage