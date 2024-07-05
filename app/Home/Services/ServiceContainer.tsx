'use client'
import { useEffect, useRef, useState } from 'react';
import { ServiceContainerProps } from "@/utils/types";
import ServiceCard from "./ServiceCard";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const ServiceContainer = ({ title, text, services }: ServiceContainerProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(false); // Initially hide the right button

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            const handleScroll = () => {
                // Check if scroll position is at the start to hide left button
                setShowLeftButton(container.scrollLeft > 0);
                // Check if scroll position is at the end to hide right button
                setShowRightButton(container.scrollLeft < container.scrollWidth - container.clientWidth - 1); // Adjusted to handle potential rounding issues
            };

            container.addEventListener('scroll', handleScroll);
            return () => {
                container.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    const scrollContainer = (scrollOffset: number) => {
        const container = containerRef.current;
        if (container) {
            container.scrollBy({
                left: scrollOffset,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="relative border-2 border-yellowLight mt-10">
            <h1 className='absolute -top-4 left-4 bg-white px-3 text-xl font-semibold'>{title}</h1>
            <div ref={containerRef} className="flex gap-7 overflow-x-auto snap-x service-container my-10 p-5">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        text={service.text}
                        svg={service.svg}
                    />
                ))}
            </div>
            {showLeftButton && (
                <button
                    className="scroll-button left-button"
                    onClick={() => scrollContainer(-1)} // Adjust scroll amount as needed
                >
                    <FaArrowLeft />
                </button>
            )}
            {showRightButton && (
                <button
                    className="scroll-button right-button"
                    onClick={() => scrollContainer(1)} // Adjust scroll amount as needed
                >
                    <FaArrowRight />
                </button>
            )}
        </div>
    )
}

export default ServiceContainer;
