export interface NavItem {
    text: string;
    href: string;
}

export interface TitleProps {
    children: React.ReactNode;
    className?: string;
}

export interface ProjectCardProps {
    url: string;
    title: string;
    text: string;
    category: string;
    index: number;
    technologies: string[];
}
export interface CategoryTabProps {
    selectedCategory: string;
    setSelectedCategory: (value: string) => void
}
export interface CategoryTabs {
    text: string;
}
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
