import Title from "../../components/ui/Title"
import CategoryTabs from "./CategoryTabs"
import ProjectCard from "./ProjectCard"

const OurProjects = () => {
    return (
        <section className="container">
            <div className="flex justify-between flex-wrap gap-x-3 items-center md:block">
                <Title>Our Projects</Title>
                <CategoryTabs />
            </div>
            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 min-[900px]:grid-cols-3 gap-5 mt-5">
                {[1, 2, 3, 4, 5].map((card) => (
                    <ProjectCard title="AI face detection app" category="" url="sdfsda" text=" Welcome to the AI Face Detection App, a cutting-edge project built with Next.js. This application leverages advanced AI models for real-time face detection, providing high accuracy and performance." technologies={["nextJS", "reactJS", "python", "sql", "nlp"]} />
                ))}
            </div>
        </section>
    )
}

export default OurProjects