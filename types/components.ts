import React, { ReactNode, SVGProps } from "react";
import { LucideIcon } from "lucide-react";
import { FieldError } from "react-hook-form";
import Icons from "@/components/common/Icons";
import { AvatarProps } from "@radix-ui/react-avatar";
import { User, UserRole } from "@prisma/client";

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

export type Icon = LucideIcon;

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

export interface MaxWidthWrapperProps {
	className?: string;
	children: ReactNode;
	large?: boolean;
};

export type NavItem = {
	title: string;
	href: string;
	badge?: number;
	disabled?: boolean;
	external?: boolean;
	authorizeOnly?: UserRole;
	icon?: keyof typeof Icons;
};

export type SidebarNavItem = {
	title: string;
	items: NavItem[];
	authorizeOnly?: UserRole;
	icon?: keyof typeof Icons;
};

export interface DashboardSidebarProps {
	links: SidebarNavItem[];
};

export interface UserAvatarProps extends AvatarProps {
	user: Pick<User, 'image' | 'name'>
};

export interface LandingNavbarProps {
	scroll?: boolean;
	large?: boolean;
};

export interface DashboardHeaderProps {
	heading: string;
	text?: string;
	children?: React.ReactNode;
};

export interface EmptyPlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {};

export interface EmptyPlaceholderIconProps extends Partial<React.SVGProps<SVGSVGElement>> {
	name: keyof typeof Icons;
	ref?:
	| ((instance: SVGSVGElement | null) => void)
	| React.RefObject<SVGSVGElement>
	| null;
};

export interface EmptyPlaceholderTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {};

export interface EmptyPlaceholderDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {};