import { createContext, Dispatch, SetStateAction, useContext } from "react";
import Cropper from 'cropperjs';

export interface StudioContextProps {
    originalPhoto: {
        content: string | null;
        setContent: Dispatch<SetStateAction<string | null>>;
    };
    restoredImage: {
        content: string | null;
        setContent: Dispatch<SetStateAction<string | null>>;
    };
    loading: {
        isLoading: boolean;
        setLoading: Dispatch<SetStateAction<boolean>>;
    };
    restoredLoaded: {
        isLoaded: boolean;
        setLoaded: Dispatch<SetStateAction<boolean>>;
    };
    error: {
        message: string | null;
        setMessage: Dispatch<SetStateAction<string | null>>;
    };
    photoName: {
        name: string | null;
        setName: Dispatch<SetStateAction<string | null>>;
    };
    cropping: {
        isCropping: boolean;
        setCropping: Dispatch<SetStateAction<boolean>>;
    };
    cropper: {
        instance: Cropper | null;
        setInstance: Dispatch<SetStateAction<Cropper | null>>;
    };
    imageUrl: {
        url: string | null;
        setUrl: Dispatch<SetStateAction<string | null>>;
    };
    sideBySide: {
        isSideBySide: boolean;
        setSideBySide: Dispatch<SetStateAction<boolean>>;
    };
    history: {
        book: string[];
        setBook: Dispatch<SetStateAction<string[]>>;
        index: number;
        setIndex: Dispatch<SetStateAction<number>>;
    };
};

export const StudioContext = createContext<StudioContextProps | undefined>(undefined);

export const useStudio = () => {
    const context = useContext(StudioContext);
    if (context === undefined) {
        throw new Error('useStudio must be used within a StudioProvider');
    }
    return context;
};