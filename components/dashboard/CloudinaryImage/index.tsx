'use client';

import { SearchResult } from "@/types/nextjs";
import { CldImage, CldImageProps } from "next-cloudinary";

const CloudinaryImage = ({ imageData, ...props }: { imageData: SearchResult } & Omit<CldImageProps, "src">) => {
    const { public_id } = imageData;

    return (
        <div className="relative">
            <CldImage {...props} src={public_id} alt="An image from Cloudinary" />
        </div>
    );
};

export { CloudinaryImage };