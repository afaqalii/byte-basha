import { TitleProps } from "@/utils/types"

const Title = ({ children, isRootLetter = false, className }: TitleProps) => {
    return (
        <div className="my-5">
            <h1 className={`relative title ${isRootLetter ? 'py-2' : 'py-0'} ${className}`}>{children}
                <div className="absolute -bottom-2 left-1 h-1 w-20 bg-yellowLight"></div>
            </h1>
        </div>
    )
}

export default Title