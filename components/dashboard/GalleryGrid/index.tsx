'use client';

import { SearchResult } from "@/types/nextjs";
import { ImageGrid } from "../ImageGrid";
import { CloudinaryImage } from "../CloudinaryImage";

const GalleryGrid = ({ images }: { images: SearchResult[] }) => {
    return (
        <ImageGrid
            images={images}
            getImage={(imageData: SearchResult) => {
                return (
                    <CloudinaryImage
                        key={imageData.public_id}
                        imageData={imageData}
                        width={400}
                        height={300}
                        alt="an image of something"
                    />
                );
            }}
        />
    );
};

export { GalleryGrid };