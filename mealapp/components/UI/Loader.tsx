export const Loader:React.FC = () => {
    return (
    <div className="flex items-center justify-center space-x-2 animate-pulse p-8">
        <div className="w-6 h-6 bg-green-400 rounded-full"></div>
        <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
        <div className="w-6 h-6 bg-red-400 rounded-full"></div>
    </div>
    )
}