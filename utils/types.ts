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
    technologies: string[];
}

export interface CategoryTabs {
    text:string;
}