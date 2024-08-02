import { CgSpinner } from "react-icons/cg";

const Loader = () => {
    return (
        <div className="min-h-[600px] grid place-content-center">
            <CgSpinner className="spin text-gray-500 text-4xl" />
        </div>
    )
}

export default Loader