import { Dispatch, ReactNode, SetStateAction } from "react";
import { FieldValues, UseFormSetValue } from "react-hook-form";

export interface ChildrenProps {
	children: React.ReactNode;
};

export type NextSearchParams = { [key: string]: string | string[] | undefined };

export type NextServerComponentsParams<T = any> = {
	params: T;
	searchParams?: { [key: string]: string | string[] | undefined };
};

export type NextServerParams = {
	params: { [key: string]: string | string[] };
};

export interface ErrorPageProps {
	error: Error;
	reset: () => void;
};

export type SWRDataType<T = any> = {
	limit: number;
	page: number;
	results: T[];
	total: number;
	totalPages: number;
};

export type UploadImageProps<T extends FieldValues = any> = {
	newImage: File;
	oldImage?: string;
	isAdmin: boolean;
	setUploading?: Dispatch<SetStateAction<boolean>>;
	setValue?: UseFormSetValue<T>;
	setImagePreview?: Dispatch<SetStateAction<string | null>>;
	fieldName?: string;
};

export type responseAction = {
	status: "success" | "error";
	stripeUrl?: string;
};

export interface SearchResult {
	public_id: string;
};

export interface ImageGridProps {
	images: SearchResult[];
	getImage: (imageData: SearchResult) => ReactNode;
};