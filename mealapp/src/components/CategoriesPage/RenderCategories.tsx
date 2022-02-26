import { TCategoriesData } from "../../types/Categories";

import { CategoryCard } from "../UI/cards/CategoryCard";
import { PageHeading } from "../UI/typography/PageHeading";

type RenderCategoriesProps = {
    /** An array of Category objects */
    Categories: TCategoriesData[]
}

export const RenderCategories: React.FC<RenderCategoriesProps> = ({Categories}: RenderCategoriesProps) => {
    return (
        <>
            <PageHeading text="Select a category to view recipies :)" />
            <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-12">
                {Categories && Categories.map((category, index) => (
                    <CategoryCard title={category.strCategory} imgUrl={category.strCategoryThumb} description={category.strCategoryDescription} linkUrl={`/category/${category.strCategory}`} key={index} />
                ))}
            </div>
        </>
    )
}