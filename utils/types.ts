import { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';

// interface for navItemss props array
export interface NavItem {
    text: string;
    href: string;
}
// interface for title components props
export interface TitleProps {
    children: React.ReactNode;
    className?: string;
    isRootLetter?: boolean;
}
// interface for project card props
export interface ProjectCardProps {
    file: string;
    title: string;
    text: string;
    category: string;
    index: number;
    technologies: string[];
}
// interface for category tabs props
export interface CategoryTabProps {
    selectedCategory: string;
    setSelectedCategory: (value: string) => void
}

// interface for Category tabs array
export interface CategoryTabs {
    text: string;
    value:string;
}

// interface for framer motion animation
export interface AnimationProps {
    initial: {
        opacity: number;
        y: number;
    };
    whileInView: {
        opacity: number;
        y: number;
    };
    viewport: {
        once: boolean;
    };
    transition: {
        duration: number;
        delay: number;
    };
}

// interface for services card props
export interface ServiceCardProps {
    title: string;
    text: string;
    svg: string;
}

// service container props 
export interface ServicesCarouselProps {
    title: string;
    text?: string;
    services: ServiceCardProps[];
}

// interface for flexContainer props
export interface FlexContainerProps {
    imageSrc: StaticImageData;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
    title: string;
    description: string;
    buttonText?: string;
    onButtonClick?: () => void;
    reverse?: boolean;
}

// interface to define FeatureListingProps 
interface featureListingObject {
    title: string;
    text: string;
    icon: IconType;
}
export interface FeatureListingProps {
    arrayOfFeatures: featureListingObject[];
}
// interface for service container props
// ServiceCardProps interface
export interface ServicesCardProps {
    title: string;
    text: string;
    icon: IconType;
}

// ServiceContainerProps interface
export interface ServicesContainerProps {
    title: string;
    services: ServicesCardProps[];
}



export interface projectData {
    id: number;
    title: string;
    file: string;
    text: string;
    category: string;
    technologies: string[];
}