'use client';
import { useEffect, useState } from "react";
import Title from "../../components/ui/Title";
import CategoryTabs from "./CategoryTabs";
import ProjectCard from "./ProjectCard";
import { useFirebaseData } from "@/app/hooks/useFirebaseData";
import { DataProps } from "@/utils/types";
import Loader from "@/app/components/ui/Loader";

const OurProjects = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [filteredData, setFilteredData] = useState<DataProps[]>([]); // Initialize with an empty array
    const { data, error, isLoading } = useFirebaseData('/projects');

    useEffect(() => {
        if (data) {
            setFilteredData(data);
        }
    }, [data]); // Update dependency to include `data` instead of `isLoading`

    useEffect(() => {
        if (data) { // Ensure `data` is defined before filtering
            if (selectedCategory === "all") {
                setFilteredData(data);
            } else {
                const filteredProjects = data.filter((project) => {
                    if (project.category)
                        project.category.toLowerCase() === selectedCategory.toLowerCase()
                });
                setFilteredData(filteredProjects);
            }
        }
    }, [selectedCategory, data]); // Add `data` to dependency array

    if (error) {
        return <div>Error: {error.message}</div>; // Display error message
    }

    return (
        <section>
            <div className="flex justify-between flex-wrap gap-x-3 items-center md:block">
                <Title>Our Projects</Title>
                <CategoryTabs selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </div>
            {
                isLoading ?
                    <Loader />
                    : (
                        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 min-[900px]:grid-cols-3 gap-5 mt-5">
                            {filteredData.length > 0 ? (
                                filteredData.map((card, index) => {
                                    if (card.category && card.technologies)
                                        return (
                                            <ProjectCard
                                                key={card.id} // Use a unique identifier from your data
                                                index={index}
                                                title={card.title}
                                                category={card.category}
                                                file={card.file}
                                                text={card.text}
                                                technologies={card.technologies}
                                            />
                                        )
                                })
                            ) : (
                                <p>No projects available</p>
                            )}
                        </div>
                    )
            }
        </section>
    );
};

export default OurProjects;
