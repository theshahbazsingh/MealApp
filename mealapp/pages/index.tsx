import type { NextPage } from 'next'
import { CategoryList } from '../components/CategoriesListPage/CategoryList'
import { Footer } from '../components/UI/Footer'
import { Header } from '../components/UI/Header'
import { PageHeading } from '../components/UI/PageHeading'
import { useEffect, useState } from 'react';
import axios from "axios";
import { ICatListData, ICatListResponse } from "../interfaces/CategoriesList";
import { Loader } from '../components/UI/Loader';

const HomePage: NextPage = () => {
  
  const [categories, setCategories] = useState<Array<ICatListData>>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    async function getCategories() {
      setLoading(true);
      await axios.request<ICatListResponse>({
          url: 'https://www.themealdb.com/api/json/v1/1/categories.php',
        }).then((response: any) => {
          setCategories(response.data.categories);
          setLoading(false);
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
          { loading ? <Loader /> : (
            <>
              <PageHeading text="Select a category to view recipies :)" />
              <CategoryList categories={categories} />
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage