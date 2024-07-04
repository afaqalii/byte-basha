import { ProjectCardProps } from "@/utils/types"

const ProjectCard = ({ title, url, text, category, technologies }: ProjectCardProps) => {
    return (
        <div className="card max-w-96 shadow-xl p-4">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="h2 py-1">
                    AI Face detection app
                </h2>
                <p className="text-gray-400 text-sm">Welcome to the AI Face Detection App, a cutting-edge project built with Next.js. This application leverages advanced AI models for real-time face detection, providing high accuracy and performance.</p>
                <div className="flex flex-wrap gap-3 my-3">
                    {["nextJS", "reactJS", "pythong", "sql", "nlp"].map((badge) => (
                        <span className="py-1 px-3 min-w-10 text-center uppercase text-xs text-yellowDark rounded-full border border-yellowLight">{badge}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard