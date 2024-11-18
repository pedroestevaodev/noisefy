'use client';

import { Skeleton } from "@/components/ui/skeleton";
import { useStudio } from "@/contexts/studioCtx";
import { useApiData } from "@/hooks/useApiData";
import { UrlBuilder } from '@bytescale/sdk';
import {
    UploadWidgetConfig,
    UploadWidgetOnPreUploadResult,
} from '@bytescale/upload-widget';
import { UploadDropzone } from "@bytescale/upload-widget-react";
import NSFWFilter from 'nsfw-filter';
import { useEffect, useState } from "react";

const StudioUploadDropZone = () => {
    const { photoName, originalPhoto, cropping } = useStudio();
    const { data } = useApiData('/api/remaining');
    const [isLoading, setIsLoading] = useState(true);

    const options: UploadWidgetConfig = {
        apiKey: !!process.env.NEXT_PUBLIC_UPLOAD_API_KEY
            ? process.env.NEXT_PUBLIC_UPLOAD_API_KEY
            : 'free',
        maxFileCount: 1,
        mimeTypes: ['image/jpeg', 'image/png', 'image/jpg'],
        editor: { images: { crop: false } },
        styles: { colors: { primary: '#000' } },
        onPreUpload: async (
            file: File
        ): Promise<UploadWidgetOnPreUploadResult | undefined> => {
            let isSafe = false;
            try {
                isSafe = await NSFWFilter.isSafe(file);
                console.log({ isSafe });
            } catch (error) {
                console.error('NSFW predictor threw an error', error);
            }
            if (!isSafe) {
                return { errorMessage: 'Detected a NSFW image which is not allowed.' };
            }
            if (data.remainingGenerations === 0) {
                return { errorMessage: 'No more generations left for the day.' };
            }
            return undefined;
        },
    };

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading ? (
                <Skeleton className="size-full rounded-lg" />
            ) : (
                <UploadDropzone
                    className="!size-full !max-w-none !max-h-none"
                    options={options}
                    onUpdate={({ uploadedFiles }) => {
                        if (uploadedFiles.length) {
                            const file = uploadedFiles[0];
                            const fileName = file.originalFile.originalFileName;
                            const imageUrl = UrlBuilder.url({
                                accountId: file.accountId,
                                filePath: file.filePath,
                                options: {
                                    transformation: 'preset',
                                    transformationPreset: 'thumbnail',
                                },
                            });
                            photoName.setName(fileName);
                            originalPhoto.setContent(imageUrl);
                            cropping.setCropping(false);
                        }
                    }}
                />
            )}
        </>
    );
};

export { StudioUploadDropZone };