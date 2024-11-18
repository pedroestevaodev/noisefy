'use client';

import { useState } from "react";
import Cropper from "cropperjs";
import { ChildrenProps } from "@/types/nextjs";
import { StudioContext } from "@/contexts/studioCtx";

const StudioProvider = ({ children }: ChildrenProps) => {
    const [originalPhoto, setOriginalPhoto] = useState<string | null>(null);
    const [restoredImage, setRestoredImage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [restoredLoaded, setRestoredLoaded] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [photoName, setPhotoName] = useState<string | null>(null);
    const [cropping, setCropping] = useState<boolean>(false);
    const [cropper, setCropper] = useState<Cropper | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [sideBySide, setSideBySide] = useState<boolean>(false);
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState<number>(0);

    return (
        <StudioContext.Provider
            value={{
                originalPhoto: { content: originalPhoto, setContent: setOriginalPhoto },
                restoredImage: { content: restoredImage, setContent: setRestoredImage },
                loading: { isLoading: loading, setLoading },
                restoredLoaded: { isLoaded: restoredLoaded, setLoaded: setRestoredLoaded },
                error: { message: error, setMessage: setError },
                photoName: { name: photoName, setName: setPhotoName },
                cropping: { isCropping: cropping, setCropping },
                cropper: { instance: cropper, setInstance: setCropper },
                imageUrl: { url: imageUrl, setUrl: setImageUrl },
                sideBySide: { isSideBySide: sideBySide, setSideBySide },
                history: { book: history, setBook: setHistory, index: historyIndex, setIndex: setHistoryIndex },
            }}
        >
            {children}
        </StudioContext.Provider>
    );
};

export default StudioProvider;