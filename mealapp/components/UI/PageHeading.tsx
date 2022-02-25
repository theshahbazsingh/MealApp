interface PageHeadingProps {
    text: string
}

export const PageHeading = ({ text }: PageHeadingProps) => {
    return <h2 className="font-serif mt-12 mb-8 text-4xl">{text}</h2>
}