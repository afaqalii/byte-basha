'use client';
import { useState } from 'react';
import { ProjectCardProps } from "@/utils/types";
import { motion } from 'framer-motion'
import { getStaggerAnimation } from '@/utils/animation';
import Image from 'next/image';
const ProjectCard = ({ title, index, url, text, technologies }: ProjectCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <motion.div
            {...getStaggerAnimation(index)}
            className="max-w-96 shadow-xl p-4 max-[500px]:mx-auto">
            <figure className='h-[300px]'>
                <Image
                    className='w-full h-full object-cover'
                    src={url}
                    alt={title}
                    width={300}
                    height={300}
                />
            </figure>
            <div>
                <h2 className="h2 py-1">
                    {title}
                </h2>
                <p className={`text-gray-400 text-sm ${isExpanded ? '' : 'line-clamp-3'}`}>
                    {text}
                </p>
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
        </motion.div>
    );
};

export default ProjectCard;
