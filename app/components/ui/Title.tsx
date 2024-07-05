import { TitleProps } from "@/utils/types"

const Title = ({ children, className }: TitleProps) => {
    return (
        <div className="my-5">
            <h1 className={`relative title ${className}`}>{children}
                <div className="absolute -bottom-2 left-1 h-1 w-20 bg-yellowLight"></div>
            </h1>
        </div>
    )
}

export default Title