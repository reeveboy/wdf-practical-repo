
function Square() {
    return (
        <div className="h-[100px] w-[100px] bg-gray-300"></div>
    )
}

export default function Xox() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="grid grid-cols-3 gap-4">
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    )
}