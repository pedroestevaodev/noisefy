import React, { SVGProps } from "react";
import { FieldError } from "react-hook-form";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number;
};

export interface TagsProps {
	id: number;
	name: string;
	icon: string;
};

export interface CategoryListProps {
	slug: string;
	name: string;
	label: string;
	icon: string;
};

export interface ErrorComponentState {
	hasError: boolean;
};

export type SendingStateType = 'SENDING' | 'SENT' | 'ERROR' | 'IDLE';

export type LinkType = 'github' | 'deploy';

export interface LinksListProps {
	slug: string;
	url: string;
	type: LinkType;
};

export interface ProjectListProps {
	id: number;
	slug: string;
    title: string;
    description: string;
    image: string;
    languages: CategoryListProps[];
	frameworks: CategoryListProps[];
	platforms: CategoryListProps[];
	links: LinksListProps[];
};

export interface ProjectModalProps {
    card: ProjectListProps;
    isOpen: boolean;
	next: boolean;
	prev: boolean;
	totalCards: number;
	currentIndex: number;
    onOpen: () => void;
    onClose: () => void;
	setCard: (id: number | null) => void;
};

export interface FiltersProps {
    filterPlatforms: Set<string>;
    setFilterPlatforms: (filter: Set<string>) => void;
    filterLanguages: Set<string>;
    setFilterLanguages: (filter: Set<string>) => void;
    filterFrameworks: Set<string>;
    setFilterFrameworks: (filter: Set<string>) => void;
	searchQuery?: string;
	setSearchQuery?: (query: string) => void;
	hideSearch?: boolean;
};

export interface FiltersState {
	page: number;
	isOpen: boolean;
}

export interface ErrorComponentProps {
	reset: () => void;
	withoutContainer?: boolean;
};

export type SidebarDataType = {
	id: string;
	label: string;
	icon?: React.FC<{
		className?: string 
		size?: number;
	}>;
	link: string;
	subItems?: SidebarDataType[];
	accessPermission?: boolean;
};

export type ColumnsType = {
	name: string;
	uid: string;
};

export interface EditorProps {
	value: string;
	error: FieldError | undefined;
	onChange: (data: string) => void;
};