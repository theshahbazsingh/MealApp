import type { NextPage } from 'next'
import { Footer } from '../../components/UI/Footer'
import { Header } from '../../components/UI/Header'
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router'
import { Category } from '../../components/CategoryPage/Category'
import { ICategoryData, ICategoryResponse } from "../../interfaces/Category";
import { Loader } from '../../components/UI/Loader';
import { PageHeading } from '../../components/UI/PageHeading';

const CategoryPage: NextPage = () => {

  const router = useRouter()
  const { cname } = router.query

  const [meals, setMeals] = useState<Array<ICategoryData>>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    async function getCategories() {
      setLoading(true);
      await axios.request<ICategoryResponse>({
          url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + cname,
        }).then((response: any) => {
          setMeals(response.data.meals);
          setLoading(false);
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
          { loading ? <Loader /> : (
            <>
              <PageHeading text={"Category: " + cname} />
              <Category meals={meals} />
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CategoryPage