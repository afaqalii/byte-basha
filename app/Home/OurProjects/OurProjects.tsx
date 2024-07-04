import Title from "../../components/ui/Title"
import ProjectCard from "./ProjectCard"

const OurProjects = () => {
    return (
        <section className="container">
            <Title>Our Projects</Title>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
                {[1, 2, 4, 5, 7].map((card) => (
                    <ProjectCard title="sdfa" category="" url="sdfsda" text="lskdfhsd" technologies={["23", "2323"]} />
                ))}
            </div>
        </section>
    )
}

export default OurProjects