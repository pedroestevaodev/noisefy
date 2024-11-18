'use client';

import { StudioUploadDropZone } from "@/components/dashboard/studio/StudioUploadDropZone";
import { useStudio } from "@/contexts/studioCtx";
import { Spinner } from "@nextui-org/spinner";
import Image from "next/image";
import { useRef } from "react";
import { StudioCompareSlider } from "../StudioCompareSlider";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";

const StudioView = () => {
    const cropperRef = useRef<ReactCropperElement>(null);
    const { error, loading, originalPhoto, restoredImage, restoredLoaded, sideBySide, cropping, cropper } = useStudio();

    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className="relative flex-1">
            {error.message && (
                <div
                    className='absolute inset-0 size-full flex items-center justify-center rounded-xl overflow-hidden z-10'
                    role='alert'
                >
                    <div className="absolute inset-0 size-full bg-muted" />
                    <div className="relative grid max-w-[500px]">
                        <div className='font-bold rounded-t px-4 py-2 text-center'>
                            Please try again in 24 hours
                        </div>
                        <div className='px-4 py-3 text-red-700 text-center'>
                            {error.message}
                        </div>
                    </div>
                </div>
            )}
            {loading.isLoading && (
                <div className="absolute inset-0 size-full flex items-center justify-center rounded-xl overflow-hidden z-10">
                    <div className="absolute inset-0 size-full bg-muted" />
                    <Spinner size="lg" color="secondary" />
                </div>
            )}
            {!originalPhoto.content && !cropping.isCropping && (
                <StudioUploadDropZone />
            )}
            {originalPhoto.content && cropping.isCropping && (
                <div className="cropper-container">
                    <Cropper 
                        ref={cropperRef}
                        src={restoredImage.content || originalPhoto.content}
                        style={{
                            height: containerRef.current?.clientHeight,
                            width: '100%',
                        }}
                        initialAspectRatio={1}
                        viewMode={1}
                        guides={false}
                        responsive={true}
                        autoCropArea={0.8}
                        background={false}
                        onInitialized={(instance) => cropper.setInstance(instance)}
                    />
                </div>
            )}
            {originalPhoto.content && !restoredImage.content && !error.message && !cropping.isCropping && (
                <Image
                    src={originalPhoto.content}
                    className="size-full object-cover rounded-xl"
                    width={500}
                    height={500}
                    alt="Original photo"
                    style={{
                        height: containerRef.current?.clientHeight,
                    }}
                />
            )}
            {restoredImage.content && originalPhoto.content && !sideBySide.isSideBySide && !cropping.isCropping && (
                <div 
                    className="flex items-center gap-[10px]" 
                    style={{ 
                        height: containerRef.current?.clientHeight,
                        width: containerRef.current?.clientWidth,
                    }}
                >
                    <Image
                        alt='original photo'
                        src={originalPhoto.content}
                        className='rounded-2xl relative object-cover w-[calc(50%-5px)]'
                        width={475}
                        height={475}
                        style={{
                            height: containerRef.current?.clientHeight,
                        }}
                    />
                    <Image
                        alt='restored photo'
                        src={restoredImage.content}
                        className='rounded-2xl relative object-cover w-[calc(50%-5px)]'
                        width={475}
                        height={475}
                        onLoad={() => restoredLoaded.setLoaded(true)}
                        style={{
                            height: containerRef.current?.clientHeight,
                        }}
                    />
                </div>
            )}
            {restoredLoaded && restoredImage.content && sideBySide.isSideBySide && !cropping.isCropping && (
                <StudioCompareSlider
                    original={originalPhoto.content!}
                    restored={restoredImage.content!}
                    height={containerRef.current?.clientHeight}
                />
            )}
        </div>
    );
};

export { StudioView };