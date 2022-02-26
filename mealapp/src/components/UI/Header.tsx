import Link from "next/link"

export const Header: React.FC = () => {
    return (
        <header className="md:w-3/4 mx-auto">
            <p className="font-bold text-8xl my-4 mb-8">
                Hey!<br></br>Who&apos;s <Link href="/" passHref><a className="text-green-800 cursor-pointer hover:text-blue-500">Hungry</a></Link>?
            </p>
        </header>
    )
}