'use client'
import { useEffect, useRef, useState } from 'react';
import { ServiceContainerProps } from "@/utils/types";
import ServiceCard from "./ServiceCard";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const ServiceContainer = ({ title, text, services }: ServiceContainerProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            const handleScroll = () => {
                setShowLeftButton(container.scrollLeft > 0);
                setShowRightButton(container.scrollLeft < container.scrollWidth - container.clientWidth - 1);
            };

            container.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial check

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
            // Update button visibility after scrolling
            setTimeout(() => {
                setShowLeftButton(container.scrollLeft > 0);
                setShowRightButton(container.scrollLeft < container.scrollWidth - container.clientWidth - 1);
            }, 300); // Delay to allow smooth scrolling to finish
        }
    };

    return (
        <div className="relative border-2 border-yellowLight mt-10">
            <h1 className='absolute -top-4 left-4 bg-white px-3 text-xl font-semibold'>{title}</h1>
            <div ref={containerRef} className="service-container flex gap-7 overflow-x-auto my-10 p-5">
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
                    onClick={() => scrollContainer(-300)} // Adjust scroll amount as needed
                >
                    <FaArrowLeft />
                </button>
            )}
            {showRightButton && (
                <button
                    className="scroll-button right-button"
                    onClick={() => scrollContainer(300)} // Adjust scroll amount as needed
                >
                    <FaArrowRight />
                </button>
            )}
        </div>
    )
}

export default ServiceContainer;
