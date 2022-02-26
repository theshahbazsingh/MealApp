import Image from "next/image";
import Link from 'next/link';

import { ICatListData } from "../../interfaces/ListCategories";

interface CategoryCardProps {
    Category: ICatListData
}

export const CategoryCard: React.FC<CategoryCardProps> = ({Category}: CategoryCardProps) => {

    const { strCategory, strCategoryThumb, strCategoryDescription } = Category

    return (
        <Link href={`/category/${strCategory}`} passHref>
            <a>
                <div className="flex p-8 mb gap-8 relative cursor-pointer hover:-translate-y-1 hover:scale-104 duration-200 bg-white shadow-md hover:shadow-lg">
                    <div className="flex-1">
                        <Image className="object-scale-down h-48 w-96" src={ strCategoryThumb } layout="responsive" width="300" height="200" alt={strCategory} objectFit="cover" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-4xl mb-4">{strCategory}</h3>
                        <p>{ strCategoryDescription.length > 175 ? strCategoryDescription.substring(0,175) + '...' : strCategoryDescription }</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}