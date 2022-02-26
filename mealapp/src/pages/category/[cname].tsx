import type { NextPage } from 'next'
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router'

import { RenderCategory } from '../../components/CategoryPage/RenderCategory'
import { Loader } from '../../components/UI/Loader';
import { Header } from '../../components/UI/Header'
import { PageHeading } from '../../components/UI/PageHeading';
import { Footer } from '../../components/UI/Footer'

import { ICategoryData, ICategoryResponse } from "../../interfaces/Category";

const CategoryPage: NextPage = () => {

  const router = useRouter()
  const { cname } = router.query

  const [meals, setMeals] = useState<Array<ICategoryData>>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  useEffect(() => {
    async function getCategories() {
      setIsLoading(true);
      await axios.request<ICategoryResponse>({
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
    <div className="bg-green-50 p-6">
      <Header />
      <main className="md:w-3/4 mx-auto">
        <div className="w-full mb-5 rounded-lg">
          { isLoading ? <Loader /> : (
            <>
              <PageHeading text={'Category: ' + cname} />
              <RenderCategory Meals={meals} />
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CategoryPage