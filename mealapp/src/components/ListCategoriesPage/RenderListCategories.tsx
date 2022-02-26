import { ICatListData } from "../../interfaces/ListCategories";
import { CategoryCard } from "./CategoryCard";

interface CategoryListProps {
    Categories: ICatListData[]
}

export const RenderCategoryList: React.FC<CategoryListProps> = ({Categories}: CategoryListProps) => {
    return (
        <>
            <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-12">
                {Categories && Categories.map((category, index) => (
                    <CategoryCard Category={category} key={index}/>
                ))}
            </div>
        </>
    )
}