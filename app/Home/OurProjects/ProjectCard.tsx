'use client';
import { useState } from 'react';
import { ProjectCardProps } from "@/utils/types";

const ProjectCard = ({ title, url, text, category, technologies }: ProjectCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="card max-w-96 shadow-xl p-4 max-[500px]:mx-auto">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h2 className="h2 py-1">
                    {title}
                </h2>
                <p className={`text-gray-400 text-sm ${isExpanded ? '' : 'line-clamp-3'}`}>
                    {text}</p>
                <button
                    className="text-yellowDark text-sm mt-2"
                    onClick={toggleReadMore}
                >
                    {isExpanded ? 'Read Less' : 'Read More'}
                </button>
                <div className="flex flex-wrap gap-3 my-3">
                    {technologies.map((badge) => (
                        <span key={badge} className="py-1 px-3 min-w-10 text-center uppercase text-xs text-yellowDark rounded-full border border-yellowDark">
                            {badge}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
