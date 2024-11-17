'use client';

import { UploadDropZoneProps } from "@/types/components";
import {
    UploadWidgetConfig,
    UploadWidgetOnPreUploadResult,
} from '@bytescale/upload-widget';
import { UploadDropzone } from "@bytescale/upload-widget-react";
import NSFWFilter from 'nsfw-filter';

const UploadDropZone = ({
    setPhotoName,
    setOriginalPhoto,
}: UploadDropZoneProps) => {
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

    return (
        <UploadDropzone
            options={options}
        />
    );
};

export { UploadDropZone };