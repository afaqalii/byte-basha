'use client';
import { useEffect, useState } from "react";
import Title from "../../components/ui/Title"
import CategoryTabs from "./CategoryTabs"
import ProjectCard from "./ProjectCard"
import "./project.css";
import { projects } from "@/utils/constants";

const OurProjects = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [filteredData, setFilteredData] = useState(projects);

    useEffect(() => {
        if (selectedCategory === "all") {
            setFilteredData(projects);
        } else {
            const filteredProjects = projects.filter(
                project => project.category.toLowerCase() === selectedCategory.toLowerCase()
            );
            setFilteredData(filteredProjects);
        }
    }, [selectedCategory]);

    return (
        <section>
            <div className="flex justify-between flex-wrap gap-x-3 items-center md:block">
                <Title>Our Projects</Title>
                <CategoryTabs selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </div>
            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 min-[900px]:grid-cols-3 gap-5 mt-5">
                {filteredData.map((card, index) => (
                    <ProjectCard
                        key={index}
                        index={index}
                        title={card.title}
                        category={card.category}
                        url={card.url}
                        text={card.text}
                        technologies={card.technologies} />
                ))}
            </div>
        </section>
    )
}

export default OurProjects