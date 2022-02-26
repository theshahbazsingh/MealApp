type YTEmbedProps = {
    vidUrl: string
}

export const YTEmbed: React.FC<YTEmbedProps> = ({vidUrl} : YTEmbedProps) => {

    return (
        <iframe width="100%" height="350" src={vidUrl} title="YouTube video player" className="mb-12" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
    )
}