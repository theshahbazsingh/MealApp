import Image from "next/image";
import Link from 'next/link';

type CategoryCardProps = {
    title: string
    description: string
    imgUrl: string
    linkUrl: string
}

export const CategoryCard: React.FC<CategoryCardProps> = ({title, description, imgUrl, linkUrl}: CategoryCardProps) => {

    return (
        <Link href={linkUrl} passHref>
            <a>
                <div className="flex p-8 mb gap-8 relative cursor-pointer hover:-translate-y-1 hover:scale-104 duration-200 bg-white shadow-md hover:shadow-lg">
                    <div className="flex-1">
                        <Image className="object-scale-down h-48 w-96" src={ imgUrl } layout="responsive" width="300" height="200" alt={`Photo of ${title}`} objectFit="cover" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-4xl mb-4">{title}</h3>
                        <p>{ description.length > 175 ? description.substring(0,175) + '...' : description }</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}