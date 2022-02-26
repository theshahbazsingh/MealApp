import { TCategoriesData } from "../../types/Categories";

import { CategoryCard } from "../ui/cards/CategoryCard";
import { PageHeading } from "../ui/typography/PageHeading";

type RenderCategoriesProps = {
    // Only accept array of TCategoriesData objects
    Categories: TCategoriesData[]
}

export const RenderCategories: React.FC<RenderCategoriesProps> = ({Categories}: RenderCategoriesProps) => {
    return (
        <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-12">
            {Categories && Categories.map((category, index) => (
                <CategoryCard title={category.strCategory} imgUrl={category.strCategoryThumb} description={category.strCategoryDescription} linkUrl={`/category/${category.strCategory}`} key={index} />
            ))}
        </div>
    )
}