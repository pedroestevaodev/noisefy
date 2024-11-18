'use client';

import { ImageGridProps } from "@/types/nextjs";

const ImageGrid = ({ images, getImage }: ImageGridProps) => {
    const getColumns = (colIndex: number) => {
        return images.filter((_, index) => index % 4 === colIndex);
    };

    return (
        <div className="grid grid-cols-4 gap-4">
            {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map((column, index) => (
                <div key={`gallery-image-grid-${index}`} className="flex flex-col gap-4">
                    {column.map(getImage)}
                </div>
            ))}
        </div>
    );
};

export { ImageGrid };