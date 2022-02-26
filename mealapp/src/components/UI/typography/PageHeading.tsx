type PageHeadingProps = {
    text: string
}

export const PageHeading:React.FC<PageHeadingProps> = ({ text }: PageHeadingProps) => {
    return <h1 className="font-serif mt-12 mb-8 text-4xl">{text}</h1>
}