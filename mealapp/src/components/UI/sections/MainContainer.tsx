type MainContainerProps = {
    children?: JSX.Element
}

export const MainContainer: React.FC<MainContainerProps> = ({children} : MainContainerProps) => {
    return (
        <main className="md:w-3/4 mx-auto">
            <div className="w-full mb-5">
                {children}
            </div>
        </main>
    )
}