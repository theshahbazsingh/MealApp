import Link from 'next/link';

type MealCardProps = {
    title: string
    imgUrl: string
    linkUrl: string
}

export const MealCard: React.FC<MealCardProps> = ({title, imgUrl, linkUrl} : MealCardProps) => {

    return (
        <Link href={linkUrl} passHref>
            <a>
                <div className="bg-cover bg-center mb gap-8 h-96 relative cursor-pointer hover:-translate-y-1 hover:scale-104 duration-200 shadow-md hover:shadow-lg" style={{backgroundImage:`url(${imgUrl})`}}>
                    <div className="absolute bottom-0 left-0 w-full pt-4 pl-4 text-center bg-black bg-opacity-10 backdrop-blur backdrop-brightness-50">
                        <p className="text-3xl mb-4 text-white">{title}</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}