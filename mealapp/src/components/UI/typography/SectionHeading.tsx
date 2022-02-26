type SectionHeadingProps = {
    text: string
}

export const SectionHeading:React.FC<SectionHeadingProps> = ({ text }: SectionHeadingProps) => {
    return <h2 className="text-2xl mb-4 font-serif">{text}</h2>
}