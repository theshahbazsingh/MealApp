import Image from "next/image";
import Link from 'next/link';
import { ICatListData } from "../../interfaces/CategoriesList";

interface CategoryListProps {
    categories: ICatListData[]
}

export const CategoryList: React.FC<CategoryListProps> = ({categories}: CategoryListProps) => {
    return (
        <>
            <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-12">
                {categories && categories.map((category, index) => (
                    <>
                    <Link href={`/category/${category.strCategory}`} passHref>
                        <a>
                            <div className='flex p-8 mb gap-8 relative cursor-pointer hover:-translate-y-1 hover:scale-104 duration-200 bg-white shadow-md hover:shadow-lg' key={index}>
                                <div className='flex-1'>
                                    <Image className="object-scale-down h-48 w-96" src={category.strCategoryThumb} layout='responsive' width="300" height="200" alt={category.strCategory} objectFit="cover" />
                                </div>
                                <div className='flex-1'>
                                    <h3 className='text-4xl mb-4'>{category.strCategory}</h3>
                                    <p>{ category.strCategoryDescription.length > 175 ? category.strCategoryDescription.substring(0,175) + "..." : category.strCategoryDescription }</p>
                                </div>
                            </div>
                        </a>
                    </Link>
                    </>
                ))}
            </div>
        </>
    )
}